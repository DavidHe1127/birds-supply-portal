* Admin respond to regular user auth challenge
Users will be on `FORCE_CHANGE_PASSWORD` when being created from `Cognito` in AWS management console.
Run cli below to help them reset the new password.

```bash
aws cognito-idp admin-initiate-auth --auth-flow ADMIN_NO_SRP_AUTH --user-pool-id <USER_POOL_ID> --client-id <APP_CLIENT_ID> --auth-parameters USERNAME=<USERNAME>,PASSWORD=<USER TEMP PASSWORD> --region <REGION>

aws cognito-idp admin-respond-to-auth-challenge --user-pool-id <USER_POOL_ID> --client-id <APP_CLIENT_ID> --challenge-name NEW_PASSWORD_REQUIRED --challenge-responses NEW_PASSWORD=<USER_NEW_PASSWORD>,USERNAME=<USERNAME> --session <SESSION_KEY_CREATED_FROM_LAST_STEP>

aws cognito-idp admin-update-user-attributes --user-pool-id <USER_POOL_ID> --username <USERNAME> --user-attribute Name=<ATTR>,Value=<VALUE>
```

<!-- aws cognito-idp admin-initiate-auth --auth-flow ADMIN_NO_SRP_AUTH --user-pool-id us-east-2_R2KUELtYK --client-id 4tv7co63gh9audhsk8kuhdsm3f --auth-parameters USERNAME=jialhe85@gmail.com,PASSWORD=52230365DavidHe --region us-east-2


aws cognito-idp admin-respond-to-auth-challenge --user-pool-id us-east-2_R2KUELtYK --client-id 4tv7co63gh9audhsk8kuhdsm3f --challenge-name NEW_PASSWORD_REQUIRED --challenge-responses NEW_PASSWORD=52230365DavidHe,USERNAME=jialhe85@gmail.com --session
6Hi18ndSAIqtQ9NXje2oqwNsTcGLIgKnwrs8aFXkAcTyrmfxx13CZfdtRU2MgP_onkO-zQ6DOBDw1hV3eQ006FELU2ILskpYxEJebiJkolV0Hy3EV9xN7iu2PnrgiJGuDOohgnQ2RI2K2pnDPqXZMksPXOOddxQUXYyH4T9APoozTG4Dd9FAxm8kx5LMNC27nfnMXa4XlJSU7jiCESPqPR_ec_xogh1aoFaizIsst0hSvn9fTQoOBQXVVDr2XW9Zi1jeIl-aXfhhLz7RT75KFersnbj-HL2O3N96bsk8HLyQjedIdgnglbf-vUZGnKqBz5oStcjYTmRAq-Q2r56lOdfiP2a9phfSX-9b0apDec85ee_h9bvL3HLxFcCoL6PtSfqarN1e0FIAmheYuk76gnwO9AS7YoronZJFZVpVKWLZmAY_MOB3w-4tljAAFvjljPinB1k0yEXGSBxv6ugpsEPv5SP5cZa92n9GOX08HQrTfu1h2WcFh31V7XU835LcKbfoeuOHNm4IM5Z1pQxZA1fAYSOvx2bhLtgEiD86XbShSUvL8h3gPzSDheK01nYp3NgknvMKNn6wzc1b_Pnl0Y9N_U0g9Sd8XdKHme-NiOTM3VQOSvrs-tF5rSHezKtsyhSaEduP4JRTDnMj3cNnHH2ctBwFbg_a713a58IG64bqdVH4a8ZMEBrTJv7EhTfcsUPsVZEo2HgvwkjIBkiJJWzMo8Mu5RKfqtRwu9z0jaH9Yb28xHFQtK9O4103e7mp-YRbCZm1OCmvBqFXgrK-nWewQSrdueD9tZ3Jb-ascUZ8iIzOvC-5HjSDK8Wh-jPnnvQVrIJ7jsLKH_OMefHVDR-Zqw12frAB3NkTfDunkKrdzDsoHex7rdpYTY3iOTI1EYwiS0vP82f40TuaDpKL4ekeaT1xbv7Cb8nW1-Td_XvOhi0utoZuLVGGCwWbQiSll6ul91w-aK8YSLJlzeH2WHtlqx2MTdcm

aws cognito-idp admin-update-user-attributes --user-pool-id us-east-2_R2KUELtYK --username jialhe85@gmail.com --user-attribute gender=female -->