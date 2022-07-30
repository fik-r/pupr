import Head from "next/head";
import React, { useEffect } from "react";
import axios from "axios";
import { FrLayout2 } from "../../components/FrLayout";
import { STORAGE_DRAFT_REGISTER } from "../../utils/constants";
import { useRouter } from "next/router";

export default function ExchangeToken(props) {
  const router = useRouter();
  useEffect(() => {
    axios
      .post("https://www.strava.com/oauth/token", null, {
        params: {
          client_id: 90543,
          client_secret: "d97aefd34f169bb8be5fc2c9efcb1413e74378a0",
          code: props.data.code,
          grant_type: "authorization_code",
        },
      })
      .then((res) => {
        const { refresh_token, access_token } = res.data;
        localStorage.setItem("refresh_token_strava", refresh_token);
        localStorage.setItem("access_token_strava", access_token);
        getAthlete();
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function getAthlete() {
    axios({
      url: "https://www.strava.com/api/v3/athlete",
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("access_token_strava")}`,
      },
    })
      .then((res) => {
        linkToStrava(res.data.id);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function linkToStrava(athleteId) {
    axios
      .post(process.env.NEXT_PUBLIC_BASE_URL + "/api/link-to-strava", {
        userId: JSON.parse(localStorage.getItem(STORAGE_DRAFT_REGISTER)).userId,
        athleteId: athleteId,
      })
      .then((res) => {
        router.push("/profile");
      })
      .catch((e) => {
        console.log(e);
      });
  }
  return (
    <div>
      <FrLayout2>
        <Head>
          <title>RunRide | Redirecting</title>
          <meta name="description" content="Run ride description" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="flex text-center">
          <p>Redirecting...</p>
        </div>
      </FrLayout2>
    </div>
  );
}

export async function getServerSideProps(params) {
  const data = params.query;
  return { props: { data } };
}
