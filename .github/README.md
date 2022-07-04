<h1 align="center">Thread Support Bot</h1>

<p align="center">
    <b>Discord bot that helps direct players to using threads in specific channels, such as support channels.</b>
</p>

<p align="center">
    Written using Javascript, Node.js, and Discord.js.
</p>

<br>

<p align="center">
    <a href="https://github.com/Dan-Mizu/Thread-Support-Bot/issues" target="_blank">
        <img src="https://img.shields.io/github/issues/Dan-Mizu/Thread-Support-Bot?color=red&style=for-the-badge" alt="Issues"/>
    </a>
    <a href="https://github.com/Dan-Mizu/Thread-Support-Bot/commits" target="_blank">
        <img src="https://img.shields.io/github/last-commit/Dan-Mizu/Thread-Support-Bot?color=darkgreen&style=for-the-badge" alt="Last Commit"/>
    </a>
</p>

<p align="center" style="display: flex; justify-content: center; align-items: center;">
    <a href="https://www.paypal.com/paypalme/DanMizu" target="_blank" style="padding: 1%">
        <img height="60rem" src="paypal-donate-button.webp" alt="Donations"/>
    </a>
</p>

<br>

## How To Use:

1. **Visit <https://discord.com/developers/applications> and make an Application.**

<img src="images/1_create_application.png" width="40%"/>

2. **Add a Bot to your Application.**

<img src="images/2_create_bot.png" width="40%"/>

<img src="images/2_add_bot_button.png" width="40%"/>

3. **Reset the Client Token for the Bot and store it somewhere safe for now.**

<img src="images/3_store_client_token.png" width="40%"/>

4. **Navigate to the OAuth URL page.**

<img src="images/4_oauth_page.png" width="40%"/>

5. **Generate a URL for your Bot giving it Administration priveleges, and visit the URL in order to add it to your Discord Server.**

<img src="images/5_create_bot_url.png" width="40%"/>

6. **Paste the Client Token you copied in step 3 into the server_data.json file in the /src/config/ directory, as well as the channel ID that you want the Bot to work in. (Right-click desired channel with Development Mode enabled in Discord settings, then click Copy ID.)**

<img src="images/6_configure_bot.png" width="40%"/>

7. **Within the /src/ directory, open a terminal and type `npm install` to install the Bot's dependencies, then type `npm start` to start the Bot.**

<img src="images/7_run_bot.png" width="40%"/>
