import discord
from django.conf import settings

# Initialize the Discord client
intents = discord.Intents.default()
intents.members = True  # Required to fetch members

client = discord.Client(intents=intents)

@client.event
async def on_ready():
    print(f'Logged in as {client.user}')

# Start the bot
def start_bot():
    client.run(settings.DISCORD_BOT_TOKEN)
