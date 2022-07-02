## Instructions

1. Create a Typeform access token following [these instructions](https://developer.typeform.com/get-started/personal-access-token/) and put it into your bashrc (or similar) as `TYPEFORM_ACCESS_TOKEN`.  Source your bashrc.
2. [Curl the Typeform `/me` endpoint](https://developer.typeform.com/get-started/hands-on/#1-retrieve-your-user-information) to ensure your token is working
```{curl}
curl --request GET \
  --url https://api.typeform.com/me \
  --header "Authorization: Bearer $TYPEFORM_ACCESS_TOKEN"
```

Note the double quotes, don't use single quotes as they do in the Typeform docs or `$TYPEFORM_ACCESS_TOKEN` won't resolve.

3. yarn install && node create.js
4. profit.
