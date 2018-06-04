* Admin respond to regular user auth challenge
Users will be on `FORCE_CHANGE_PASSWORD` when being created from `Cognito` in AWS management console.
Run cli below to help them reset the new password.

  1. Update required attributes including *given_name,gender,phone_number,profile*
    Please note correct format for phone number is like *+61000000000*
  ```bash
  aws cognito-idp admin-update-user-attributes --user-pool-id <USER_POOL_ID> --username <USERNAME> --user-attribute Name=given_name,Value=david Name=phone_number,Value=+430296168
  ```
  2. Generate session
  ```bash
  aws cognito-idp admin-initiate-auth --auth-flow ADMIN_NO_SRP_AUTH --user-pool-id <USER_POOL_ID> --client-id <APP_CLIENT_ID> --auth-parameters USERNAME=<USERNAME>,PASSWORD=<USER TEMP PASSWORD> --region <REGION>
  ```
  3. Reset password
  ```bash
  aws cognito-idp admin-respond-to-auth-challenge --user-pool-id <USER_POOL_ID> --client-id <APP_CLIENT_ID> --challenge-name NEW_PASSWORD_REQUIRED --challenge-responses NEW_PASSWORD=<USER_NEW_PASSWORD>,USERNAME=<USERNAME> --session <SESSION_KEY_CREATED_FROM_LAST_STEP>
  ```