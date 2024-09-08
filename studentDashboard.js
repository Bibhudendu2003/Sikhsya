document.getElementById("enroll-button").addEventListener("click", function () {
  document.getElementById("enroll-modal").classList.remove("hidden");
  startCamera();
});

function closeModal() {
  document.getElementById("enroll-modal").classList.add("hidden");
  stopCamera();
}

document.getElementById("close-modal").addEventListener("click", closeModal);

// Camera Functions
let stream;

async function startCamera() {
  try {
    stream = await navigator.mediaDevices.getUserMedia({ video: true });
    document.getElementById("video").srcObject = stream;
  } catch (error) {
    console.error("Error accessing webcam: ", error);
  }
}

function stopCamera() {
  if (stream) {
    const tracks = stream.getTracks();
    tracks.forEach((track) => track.stop());
    document.getElementById("video").srcObject = null;
  }
}

// Handle form submission
document.getElementById("submit-button").addEventListener("click", function () {
  const roomName = document.getElementById("room-name").value;
  if (roomName) {
    const enrolledClassrooms = document.getElementById("enrolled-classrooms");
    const roomItem = document.createElement("div");
    roomItem.textContent = roomName;
    roomItem.classList.add(
      "bg-white",
      "dark:bg-gray-900",
      "p-2",
      "rounded-md",
      "shadow-md",
      "mb-2",
      "cursor-pointer"
    );
    roomItem.addEventListener("click", function () {
      showClassroomDetails(roomName);
    });
    enrolledClassrooms.appendChild(roomItem);

    // Reset form fields
    document.getElementById("room-name").value = "";
    document.getElementById("passkey").value = "";

    closeModal();
  }
});

// Show classroom details with buttons
function showClassroomDetails(roomName) {
  document.getElementById("right-side").innerHTML = `
        <div id="buttons-container" class="mb-4 flex justify-around items-center">
            <button id="about-class-btn" class="text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-500 dark:hover:bg-blue-600 flex items-center gap-2">
                <i class="fas fa-info-circle"></i> About Class
            </button>
            <button id="text-chat-btn" class="text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-500 dark:hover:bg-blue-600 flex items-center gap-2">
                <i class="fas fa-comments"></i> Text Chat
            </button>
            <button id="video-chat-btn" class="text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-500 dark:hover:bg-blue-600 flex items-center gap-2">
                <i class="fas fa-video"></i> Video Chat
            </button>
            <button id="class-note-btn" class="text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-500 dark:hover:bg-blue-600 flex items-center gap-2">
                <i class="fas fa-book"></i> Class Note
            </button>
            <button id="notice-board-btn" class="text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-500 dark:hover:bg-blue-600 flex items-center gap-2">
                <i class="fas fa-bullhorn"></i> Notice Board
            </button>
            <button id="ask-doubts-btn" class="text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-500 dark:hover:bg-blue-600 flex items-center gap-2">
                <i class="fas fa-question-circle"></i> Ask Doubts
            </button>
        </div>
        <div id="content-area" class="mt-4"></div>
    `;

  // Add functionality for each button
  document
    .getElementById("about-class-btn")
    .addEventListener("click", function () {
      document.getElementById("content-area").innerHTML = `
            <div id="class-details" class="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
                <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">About Class</h2>
                <div class="text-gray-900 dark:text-gray-400">
                    <p><strong>Teacher's Name:</strong> Sibananda Behera</p>
                    <p><strong>Class Timing:</strong> 10:00 AM - 12:00 PM</p>
                    <p><strong>Topics to Be Covered:</strong></p>
                    <ul class="list-disc list-inside ml-4">
                        <li>Introduction to JavaScript</li>
                        <li>Functions and Objects</li>
                        <li>DOM Manipulation</li>
                        <li>Event Handling</li>
                    </ul>
                    <p class="mt-4"><strong>Additional Information:</strong></p>
                    <p>Ensure to complete the pre-readings before the class, and be prepared for the quiz after the session.</p>
                </div>
            </div>
        `;
    });

  document
    .getElementById("text-chat-btn")
    .addEventListener("click", function () {
      document.getElementById("content-area").innerHTML = `
            <!-- Chat Section -->
            <div class="flex flex-col h-full gap-4">

                <!-- Chat Box -->
                <div id="chat-box" class="flex-grow bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md overflow-y-auto space-y-4">
                    <!-- Chat bubbles -->
                    <div class="flex items-start gap-2.5">
                        <img class="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-1.jpg" alt="User image">
                        <div class="flex flex-col w-full max-w-[320px] leading-1.5">
                            <div class="flex items-center space-x-2 rtl:space-x-reverse">
                                <span class="text-sm font-semibold text-gray-900 dark:text-white">Bishnu Prasad</span>
                                <span class="text-sm font-normal text-gray-500 dark:text-gray-400">11:46</span>
                            </div>
                            <p class="text-sm font-normal py-2 text-gray-900 dark:text-white">That's awesome. I think our users will really appreciate the improvements.</p>
                            <span class="text-sm font-normal text-gray-500 dark:text-gray-400">Delivered</span>
                        </div>
                    </div>

                    <div class="flex items-start gap-2.5">
                        <img class="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" alt="Sender image">
                        <div class="flex flex-col w-full max-w-[320px] leading-1.5">
                            <div class="flex items-center space-x-2 rtl:space-x-reverse">
                                <span class="text-sm font-semibold text-gray-900 dark:text-white">Bijaylaxmi</span>
                                <span class="text-sm font-normal text-gray-500 dark:text-gray-400">11:47</span>
                            </div>
                            <p class="text-sm font-normal py-2 text-gray-900 dark:text-white">Thanks! I'm sure it will make things much smoother.</p>
                            <span class="text-sm font-normal text-gray-500 dark:text-gray-400">Delivered</span>
                        </div>
                    </div>
                </div>

                <!-- Input Area -->
                <div id="input-area" class="bsolute bottom-0 flex items-center space-x-4 p-4 bg-white dark:bg-gray-900 rounded-lg shadow-md">
                    <input id="message-input" type="text" placeholder="Type your message..." class="w-full p-2 border rounded-md focus:ring focus:ring-blue-500 dark:bg-gray-800 dark:text-white">
                    <button id="send-message-btn" class="btn btn-primary">Send</button>
                </div>
            </div>
        `;
    });

  document
    .getElementById("video-chat-btn")
    .addEventListener("click", async function () {
      document.getElementById("content-area").innerHTML = `
            <div class="video-container h-96 bg-black rounded-lg">
                <video id="local-video" class="w-full h-full" autoplay muted></video>
            </div>
            <div class="flex mt-4 justify-around">
                <button id="video-toggle-btn" class="p-2 bg-gray-800 text-white rounded-full w-12 h-12">
                    <i class="fas fa-video"></i>
                </button>
                <button id="audio-toggle-btn" class="p-2 bg-gray-800 text-white rounded-full w-12 h-12">
                    <i class="fas fa-microphone"></i>
                </button>
                <button id="screen-share-btn" class="p-2 bg-gray-800 text-white rounded-full w-12 h-12">
                    <i class="fas fa-desktop"></i>
                </button>
            </div>
        `;

      const videoElement = document.getElementById("local-video");

      try {
        // Request access to the user's camera and microphone
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true,
        });
        videoElement.srcObject = stream;
      } catch (error) {
        console.error("Error accessing media devices.", error);
      }

      document
        .getElementById("video-toggle-btn")
        .addEventListener("click", function () {
          const stream = videoElement.srcObject;
          const videoTrack = stream.getVideoTracks()[0];
          videoTrack.enabled = !videoTrack.enabled;
          this.querySelector("i").classList.toggle("fa-video");
          this.querySelector("i").classList.toggle("fa-video-slash");
        });

      document
        .getElementById("audio-toggle-btn")
        .addEventListener("click", function () {
          const stream = videoElement.srcObject;
          const audioTrack = stream.getAudioTracks()[0];
          audioTrack.enabled = !audioTrack.enabled;
          this.querySelector("i").classList.toggle("fa-microphone");
          this.querySelector("i").classList.toggle("fa-microphone-slash");
        });

      document
        .getElementById("screen-share-btn")
        .addEventListener("click", async function () {
          try {
            const screenStream = await navigator.mediaDevices.getDisplayMedia({
              video: true,
            });
            document.getElementById("local-video").srcObject = screenStream;
          } catch (error) {
            console.error("Error starting screen share", error);
          }
        });
    });

  document
    .getElementById("class-note-btn")
    .addEventListener("click", function () {
      const files = [
        {
          name: "Introduction to JavaScript",
          pages: "12 Pages",
          size: "18 MB",
          path: "/path/to/flowbite-terms.pdf",
        },
        {
          name: "Functions and Objects",
          pages: "25 Pages",
          size: "30 MB",
          path: "/path/to/intro-programming.pdf",
        },
        {
          name: "DOM Manipulation",
          pages: "30 Pages",
          size: "25 MB",
          path: "/path/to/data-structures-overview.pdf",
        },
      ];

      document.getElementById("content-area").innerHTML = `
            <div id="class-notes" class="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
                <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Class Notes for ${roomName}</h2>
                ${files
                  .map(
                    (file) => `
                    <div class="flex items-start bg-gray-50 dark:bg-gray-700 rounded-lg p-4 mb-4">
                        <div class="flex-grow">
                            <span class="flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-white">
                                <svg fill="none" aria-hidden="true" class="w-5 h-5 flex-shrink-0" viewBox="0 0 20 21">
                                    <path fill="#E2E5E7" d="M5.024.5c-.688 0-1.25.563-1.25 1.25v17.5c0 .688.562 1.25 1.25 1.25h12.5c.687 0 1.25-.563 1.25-1.25V5.5l-5-5h-8.75z"/>
                                    <path fill="#B0B7BD" d="M15.024 5.5h3.75l-5-5v3.75c0 .688.562 1.25 1.25 1.25z"/>
                                    <path fill="#CAD1D8" d="M18.774 9.25l-3.75-3.75h3.75v3.75z"/>
                                    <path fill="#F15642" d="M16.274 16.75a.627.627 0 01-.625.625H1.899a.627.627 0 01-.625-.625V10.5c0-.344.281-.625.625-.625h13.75c.344 0 .625.281.625.625v6.25z"/>
                                    <path fill="#fff" d="M3.998 12.342c0-.165.13-.345.34-.345h1.154c.65 0 1.235.435 1.235 1.269 0 .79-.585 1.23-1.235 1.23h-.834v.66c0 .22-.14.344-.32.344a.337.337 0 01-.34-.344v-2.814zm.66.284v1.245h.834c.335 0 .6-.295.6-.605 0-.35-.265-.64-.6-.64h-.834zM7.706 15.5c-.165 0-.345-.09-.345-.31v-2.838c0-.18.18-.31.345-.31H8.85c2.284 0 2.234 3.458.045 3.458h-1.19zm.315-2.848v2.239h.83c1.349 0 1.409-2.24 0-2.24h-.83zM11.894 13.486h1.274c.18 0 .36.18.36.355 0 .165-.18.3-.36.3h-1.274v1.049c0 .175-.124.31-.3.31-.22 0-.354-.135-.354-.31v-2.839c0-.18.135-.31.355-.31h1.754c.22 0 .35.13.35.31 0 .16-.13.34-.35.34h-1.455v.795z"/>
                                    <path fill="#CAD1D8" d="M15.649 17.375H3.774V18h11.875a.627.627 0 00.625-.625v-.625a.627.627 0 01-.625.625z"/>
                                </svg>
                                ${file.name}
                            </span>
                            <span class="flex text-xs font-normal text-gray-500 dark:text-gray-400 gap-2 mt-1">
                                ${file.pages} 
                                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="self-center" width="3" height="4" viewBox="0 0 3 4" fill="none">
                                    <circle cx="1.5" cy="2" r="1.5" fill="#6B7280"/>
                                </svg>
                                ${file.size} 
                                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="self-center" width="3" height="4" viewBox="0 0 3 4" fill="none">
                                    <circle cx="1.5" cy="2" r="1.5" fill="#6B7280"/>
                                </svg>
                                PDF
                            </span>
                        </div>
                        <div class="flex-shrink-0">
                            <a href="${file.path}" download class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-600">
                                <svg class="w-6 h-6 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                    <path fill-rule="evenodd" d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" clip-rule="evenodd"/>
                                    <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                `
                  )
                  .join("")}
            </div>
        `;
    });

  document
    .getElementById("notice-board-btn")
    .addEventListener("click", function () {
      document.getElementById("content-area").innerHTML = `
            <div id="notice-board" class="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
                <h2 class="text-xl font-bold text-gray-800 dark:text-white mb-4">Notice Board for ${roomName}</h2>
                <ul class="list-disc pl-6 space-y-2">
                    <li class="text-gray-600 dark:text-gray-400">
                        <div class="font-medium">Assignment Deadline Extended</div>
                        <div class="text-sm text-gray-500 dark:text-gray-400">The deadline for the assignment has been extended to next Friday.</div>
                    </li>
                    <li class="text-gray-600 dark:text-gray-400">
                        <div class="font-medium">Next Class on Monday</div>
                        <div class="text-sm text-gray-500 dark:text-gray-400">The next class will be held on Monday at 10 AM.</div>
                    </li>
                    <li class="text-gray-600 dark:text-gray-400">
                        <div class="font-medium">Extra Credit Opportunity</div>
                        <div class="text-sm text-gray-500 dark:text-gray-400">An extra credit assignment is available. Check the course portal for details.</div>
                    </li>
                </ul>
            </div>
        `;
    });

  document
    .getElementById("ask-doubts-btn")
    .addEventListener("click", function () {
      document.getElementById("content-area").innerHTML = `
            <div id="ask-doubts" class="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
                <h2 class="text-xl font-bold text-gray-800 dark:text-white mb-4">Ask Your Doubts</h2>
                <form id="ask-doubts-form" class="space-y-4">
                    <div>
                        <label for="doubt" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Your Doubt</label>
                        <textarea id="doubt" rows="4" class="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm text-gray-900 dark:text-gray-200 bg-white dark:bg-gray-800 focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Ask your doubt" required></textarea>
                    </div>
                    <div>
                        <button type="submit" class="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">Submit</button>
                    </div>
                </form>
            </div>
        `;

      // Handle form submission
      document
        .getElementById("ask-doubts-form")
        .addEventListener("submit", function (e) {
          e.preventDefault();

          const doubt = document.getElementById("doubt").value;

          if (doubt) {
            // Reset the form after submission
            document.getElementById("ask-doubts-form").reset();
          } else {
            alert("Please fill in all fields before submitting.");
          }
        });
    });
}

// Open/Close chatbot
document.getElementById("ask-ai-btn").addEventListener("click", function () {
  document.getElementById("chatbot-container").classList.toggle("hidden");
  document.getElementById("chatbot-overlay").classList.toggle("hidden");
});

document.getElementById("close-chatbot").addEventListener("click", function () {
  document.getElementById("chatbot-container").classList.add("hidden");
  document.getElementById("chatbot-overlay").classList.add("hidden");
});

document
  .getElementById("send-message")
  .addEventListener("click", async function () {
    const message = document.getElementById("chatbot-input").value.trim();
    if (message) {
      // Append user message
      const messageElement = document.createElement("div");
      messageElement.className = "text-gray-700 dark:text-gray-300 mb-2";
      messageElement.innerHTML = `<strong>You:</strong> ${message}`;
      document.getElementById("chatbot-messages").appendChild(messageElement);
      document.getElementById("chatbot-input").value = ""; // Clear input field
    }
  });
