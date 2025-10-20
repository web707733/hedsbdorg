
const menuHTML = `
    <ul>
      <li><a href="https://hedsbd.org/" aria-current="page">Home</a></li>
      <li class="dropdown">
        <a href="#">About<i class="bi bi-chevron-down toggle-dropdown"></i></a>
        <ul>
          <li><a href="https://hedsbd.org/member.html?MEMBER_TYPE=EXECUTIVE">Executive Member</a></li>
          <li><a href="https://hedsbd.org/">Advisor</a></li>
          <li><a href="https://hedsbd.org/">Central Committee</a></li>
          <li><a href="https://hedsbd.org/">Objectives of Society</a></li>
          <li><a href="https://hedsbd.org/">Memorandum (Bangla)</a></li>
        </ul>
      </li>
      <li class="dropdown">
        <a href="https://hedsbd.org/">Notice<i class="bi bi-chevron-down toggle-dropdown"></i></a>
        <ul>
          <li><a href="#">Message</a></li>
        </ul>
      </li>
      <li class="dropdown">
        <a href="https://hedsbd.org/branchandcommittee.html">Branch &amp; Committee<i class="bi bi-chevron-down toggle-dropdown"></i></a>
      </li>
      <li><a href="https://www.facebook.com/groups/hedsbd">Activities</a></li>
      <li class="dropdown">
        <a href="https://hedsbd.org/">Gallery<i class="bi bi-chevron-down toggle-dropdown"></i></a>
        <ul>
          <li><a href="https://hedsbd.org/">Image</a></li>
          <li><a href="https://hedsbd.org/">Video</a></li>
        </ul>
      </li>
      <li class="dropdown">
        <a href="https://hedsbd.org/">Members<i class="bi bi-chevron-down toggle-dropdown"></i></a>
        <ul>
          <li><a href="https://hedsbd.org/">Member Registration</a></li>
          <li><a href="https://hedsbd.org/member.html?MEMBER_TYPE=GENERAL">General Member</a></li>
          <li><a href="https://hedsbd.org/member.html?MEMBER_TYPE=LIFE">Life Member</a></li>
          <li><a href="https://hedsbd.org/member.html?MEMBER_TYPE=DONOR">Donor Member</a></li>
        </ul>
      </li>
      <li class="dropdown">
        <a href="https://hedsbd.org/">Contact Us<i class="bi bi-chevron-down toggle-dropdown"></i></a>
        <ul>
          <li><a href="https://hedsbd.org/">Membership form</a></li>
        </ul>
      </li>
    </ul>
  `;
console.log("load menu");



  // Load it into the container
//document.getElementById("navmenu").innerHTML = menuHTML;
  // === Highlight menu item based on URL parameter ===




  
// Get query parameter
const params = new URLSearchParams(window.location.search);
const memberType = params.get("MEMBER_TYPE"); // e.g. "DONOR"

if (memberType) {

document.getElementById("memberlist").textContent = memberType;
const select = document.getElementById("member_type");
// Normalize both sides (remove spaces and uppercase)
const normalized = memberType.trim().toUpperCase();

// Loop through options and select the match
for (const option of select.options) {
    if (option.value.trim().toUpperCase() === normalized) {
    option.selected = true;
    break;
    }
}
}
