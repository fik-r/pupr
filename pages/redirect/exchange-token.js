import Head from "next/head";
import React, { useEffect } from "react";
import { FrLayout2 } from "../../components/FrLayout";
import { ATHLETE_ID, STORAGE_TOAST_ERROR } from "../../utils/constants";
import { useRouter } from "next/router";
import axios from "axios";
import API from "../../utils/api";

export default function ExchangeToken(props) {
  const router = useRouter();
  useEffect(() => {
    const { error } = router.query;

    const clientId = process.env.NEXT_PUBLIC_STRAVA_CLIENT_ID;
    const clientSecret = process.env.NEXT_PUBLIC_STRAVA_CLIENT_SECRET;
    if (error == "access_denied") {
      localStorage.setItem(STORAGE_TOAST_ERROR, "Akses strava di tolak");
      router.push("/register/connect-strava");
    } else {
      axios
        .post("https://www.strava.com/oauth/token", null, {
          params: {
            client_id: clientId,
            client_secret: clientSecret,
            code: props.data.code,
            grant_type: "authorization_code",
          },
        })
        .then((res) => {
          const { refresh_token, access_token, expires_in, expires_at } =
            res.data;
          getAthlete(access_token, refresh_token, expires_in, expires_at);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  function getAthlete(access_token, refresh_token, expires_in, expires_at) {
    axios({
      url: "https://www.strava.com/api/v3/athlete",
      method: "GET",
      headers: {
        authorization: `Bearer ${access_token}`,
      },
    })
      .then((res) => {
        linkToStrava(
          res.data,
          access_token,
          refresh_token,
          expires_in,
          expires_at
        );
      })
      .catch((err) => {});
  }

  function linkToStrava(
    data,
    access_token,
    refresh_token,
    expires_in,
    expires_at
  ) {
    API.post(process.env.NEXT_PUBLIC_BASE_URL + "/api/link-to-strava", {
      athleteId: data.id,
      profile: data.profile,
      accessToken: access_token,
      refreshToken: refresh_token,
      expiresIn: expires_in,
      expiresAt: expires_at,
    })
      .then((res) => {
        localStorage.setItem(ATHLETE_ID, res.data.payload.athleteId);
        router.push("/profile");
      })
      .catch((e) => {
        if (e.response.status == 409) {
          localStorage.setItem(
            STORAGE_TOAST_ERROR,
            "Akun sudah terhubung dengan akun lain"
          );
          router.push("/register/connect-strava");
        }
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

        <div className="flex justify-center items-center">
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
