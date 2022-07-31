import Head from "next/head";
import { useEffect, useState } from "react";
import { FrLayout2 } from "../../components/FrLayout";
import { FrTextField, FrDropdownField } from "../../components/FrField";
import { useRouter } from "next/router";
import FrButton from "../../components/FrButton";
import useResponsive from "../../utils/media-query";
import { ACCESS_TOKEN, REFRESH_TOKEN, ATHLETE_ID, STORAGE_DRAFT_REGISTER} from "../../utils/constants";
import { ToastSuccess, ToastError } from "../../components/FrToast";
import API from "../../utils/api";

const Login = () => {
  const router = useRouter();

  const { isMobile } = useResponsive();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    localStorage.removeItem(STORAGE_DRAFT_REGISTER);
  }, []);

  function submitLogin() {
    setLoading(true);
    API.post("/api/login", {
      email: email || "",
      password: password || "",
    })
      .then((res) => {
        const data = res.data.payload;
        localStorage.setItem(ATHLETE_ID, data.athleteId || "");
        localStorage.setItem(ACCESS_TOKEN, data.accessToken);
        localStorage.setItem(REFRESH_TOKEN, data.refreshToken);
        if (data.athleteId) {
          router.push("profile");
        } else {
          router.push("/register/connect-strava");
        }
      })
      .catch((err) => {
        setError(ToastError(err.response.data.message));
      })
      .finally(() => {
        setLoading(false);
      });
  }
  return (
    <FrLayout2 error={error} success={success}>
      <Head>
        <title>RunRide | Login</title>
        <meta name="description" content="Run ride description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="space-y-2 mobile:space-y-0">
        <div className="flex justify-center mb-[34px]">
          <span className="fr-text-headline-1 text-black self-center pt-[50px] ">
            Login
          </span>
        </div>
        <div className="grid  items-center justify-center gap-x-3 mobile:gap-y-2 mobile:pb-2">
          <FrTextField
            label="Email"
            errorMessage="Email tidak boleh kosong"
            placeholder="Masukkan Email"
            inputType="text"
            onChange={(event) => {
              const value = event.target.value;
              setEmail(value);
            }}
            value={email}
          />
          <FrTextField
            label="Password"
            errorMessage="Password tidak boleh kosong"
            placeholder="Masukkan Password"
            inputType="password"
            value={password}
            onChange={(event) => {
              const value = event.target.value;
              setPassword(value);
            }}
          />
        </div>
        <div className="flex justify-center pt-[34px]">
          <FrButton
            className="w-[268px]"
            color="primary"
            disabled={email.length == 0 || password.length == 0}
            label="Login"
            loading={loading}
            onClick={submitLogin}
          />
        </div>
      </div>
    </FrLayout2>
  );
};

export default Login;
