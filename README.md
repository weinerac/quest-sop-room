# Quest Sydney Olympic Park — In-Room Guest Page (POC)

A mobile-first, single-screen guest page designed to be opened from a QR code in a
Quest apartment. It shows the guest's name, room and booking details, and embeds an
ElevenLabs conversational AI concierge the guest can ask about the room, property and
local area.

## Personalisation via URL params

The page reads query parameters so each room's QR code can deep-link to its own booking:

```
?name=Ina&room=412&type=One%20Bedroom%20Apartment&checkin=Mon,%202%20Jun&checkout=Thu,%205%20Jun&guests=2%20Adults&wifi=Quest_Guest
```

If no params are supplied, sensible defaults are shown.

## Local preview

```bash
npx serve -s . -l 3000
# or
python3 -m http.server 4173
```

## Deploy on Railway

This is a static site served by [`serve`](https://www.npmjs.com/package/serve).

- Build command: _none required_
- Start command: `npm start` (binds to Railway's `$PORT`)

Railway will detect `package.json`, run `npm install`, then `npm start`.
