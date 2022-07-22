const superagent = require('superagent').agent();

const olx = async () => {
    let authPage = await superagent
        .post('https://auth.olx.com.pk/auth/realms/olx-pk/protocol/openid-connect/token')
        .send({
            grant_type: "password",
            client_id: "frontend",
            scope: "openid",
            type: "email_password",
            email: "foknavagnu@tozya.com",
            password: "12345qwert"
        })
        .set('Content-type', 'application/x-www-form-urlencoded');
    
    console.log(authPage.body);
    let token = authPage.body.access_token;
    console.log(token);
}

olx();