// POC: populate guest + room details from URL query params.
// Example: ?name=Ina&room=412&type=One%20Bedroom%20Apartment&checkin=Mon,%202%20Jun&checkout=Thu,%205%20Jun&guests=2%20Adults&wifi=Quest_Guest
(function () {
  const params = new URLSearchParams(window.location.search);

  const set = (id, key) => {
    const val = params.get(key);
    if (val) {
      const el = document.getElementById(id);
      if (el) el.textContent = val;
    }
  };

  set("guestName", "name");
  set("roomTag", "room");
  set("roomType", "type");
  set("checkIn", "checkin");
  set("checkOut", "checkout");
  set("guests", "guests");
  set("wifi", "wifi");

  // If a plain room number is passed, prefix it with "Room".
  const room = params.get("room");
  if (room && !/room/i.test(room)) {
    const el = document.getElementById("roomTag");
    if (el) el.textContent = "Room " + room;
  }
})();
