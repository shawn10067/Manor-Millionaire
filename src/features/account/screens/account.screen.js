import React from "react";
import SafeAreaAccountView from "../../../components/SafeAreaAccountView";
import {
  AccountOptionsView,
  CoinsLottie,
  GlobeLottie,
  GlobeView,
  LoginButton,
  LogoImage,
  LogoView,
  PlaneLottie,
  PlaneView,
  SignUpButton,
} from "../components/account.screen.styles";

const AccountScreen = () => {
  return (
    <SafeAreaAccountView>
      <LogoView>
        <LogoImage />
      </LogoView>
      <GlobeView>
        <GlobeLottie>
          <PlaneView>
            <PlaneLottie>
              <CoinsLottie />
            </PlaneLottie>
          </PlaneView>
        </GlobeLottie>
      </GlobeView>
      <AccountOptionsView>
        <LoginButton />
        <SignUpButton />
      </AccountOptionsView>
    </SafeAreaAccountView>
  );
};

export default AccountScreen;
