import Head from "next/head";
import React, { useEffect } from "react";
import { FrLayout2 } from "../../components/FrLayout";
import { STORAGE_DRAFT_REGISTER } from "../../utils/constants";
import { useRouter } from "next/router";
import axios from "axios";
import API from "../../utils/api"

export default function ExchangeToken(props) {
  const router = useRouter();
  useEffect(() => {
    axios.post("https://www.strava.com/oauth/token", null, {
      params: {
        client_id: 90543,
        client_secret: "d97aefd34f169bb8be5fc2c9efcb1413e74378a0",
        code: props.data.code,
        grant_type: "authorization_code",
      },
    })
      .then((res) => {
        const { refresh_token, access_token } = res.data;
        getAthlete(access_token, refresh_token);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function getAthlete(access_token, refresh_token) {
    console.log(access_token);
    axios({
      url: "https://www.strava.com/api/v3/athlete",
      method: "GET",
      headers: {
        authorization: `Bearer ${access_token}`,
      },
    })
      .then((res) => {
        linkToStrava(res.data, access_token, refresh_token);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function linkToStrava(data, access_token, refresh_token) {
    API.post(process.env.NEXT_PUBLIC_BASE_URL + "/api/link-to-strava", {
      athleteId: data.id,
      profile: data.profile,
      accessToken: access_token,
      refreshToken: refresh_token,
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
