// Open the Create Classroom modal
document.getElementById("create-button").addEventListener("click", function () {
  document.getElementById("create-modal").classList.remove("hidden");
});

// Close the Create Classroom modal
function closeCreateModal() {
  document.getElementById("create-modal").classList.add("hidden");
}

document
  .getElementById("close-create-modal")
  .addEventListener("click", closeCreateModal);

// Handle classroom creation
document
  .getElementById("create-classroom-button")
  .addEventListener("click", function () {
    const roomName = document.getElementById("classroom-name").value;
    const passkey = document.getElementById("room-passkey").value;
    const studentPhotos = document.getElementById("student-photos").files;

    if (roomName && passkey && studentPhotos.length > 0) {
      const createdClassrooms = document.getElementById("created-classrooms");

      // Create a new classroom item
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

      // Add event listener for future functionality (e.g., opening classroom details)
      roomItem.addEventListener("click", function () {
        showClassroomDetails(roomName, passkey);
      });

      // Append the new classroom item to the created classrooms section
      createdClassrooms.appendChild(roomItem);

      // Reset form fields after submission
      document.getElementById("classroom-name").value = ""; // Reset 'classroom-name'
      document.getElementById("room-passkey").value = ""; // Reset 'room-passkey'
      document.getElementById("student-photos").value = ""; // Reset 'student-photos'
      document.getElementById("photo-preview").innerHTML = ""; // Clear the preview

      // Close the modal
      closeCreateModal();
    } else {
      alert("Please fill in all fields.");
    }
  });

// Handle file input and preview
const photoUploadArea = document.getElementById("photo-upload-area");
const studentPhotosInput = document.getElementById("student-photos");
const photoPreview = document.getElementById("photo-preview");

photoUploadArea.addEventListener("click", () => studentPhotosInput.click());

studentPhotosInput.addEventListener("change", (event) => {
  photoPreview.innerHTML = ""; // Clear previous thumbnails
  const files = event.target.files;
  if (files.length > 0) {
    Array.from(files).forEach((file) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = document.createElement("img");
        img.src = e.target.result;
        img.classList.add(
          "w-12",
          "h-12",
          "object-cover",
          "rounded-md",
          "shadow",
          "flex-shrink-0"
        );
        photoPreview.appendChild(img);
      };
      reader.readAsDataURL(file);
    });
  }
});

// Placeholder function for classroom details (can be extended later)
function showClassroomDetails(roomName, passkey) {
  alert(`You clicked on classroom: ${roomName}`);
}

// Show classroom details with updated buttons
function showClassroomDetails(roomName, passkey) {
  document.getElementById("right-side").innerHTML = `
      <div id="buttons-container" class="mb-4 flex justify-around items-center">
          <button id="about-class-btn" class="text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-500 dark:hover:bg-blue-600 flex items-center gap-2">
              <i class="fas fa-info-circle"></i> About Class
          </button>
          <button id="video-chat-btn" class="text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-500 dark:hover:bg-blue-600 flex items-center gap-2">
              <i class="fas fa-video"></i> Video Chat
          </button>
          <button id="upload-notes-btn" class="text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-500 dark:hover:bg-blue-600 flex items-center gap-2">
              <i class="fas fa-book"></i> Upload Notes
          </button>
          <button id="summary-feedback-btn" class="text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-500 dark:hover:bg-blue-600 flex items-center gap-2">
              <i class="fas fa-star"></i> Summary & Feedback
          </button>
          <button id="solve-doubts-btn" class="text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-500 dark:hover:bg-blue-600 flex items-center gap-2">
              <i class="fas fa-question-circle"></i> Solve Doubts
          </button>
          <button id="notice-board-btn" class="text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-500 dark:hover:bg-blue-600 flex items-center gap-2">
              <i class="fas fa-bullhorn"></i> Notice Board
          </button>
      </div>
      <div id="content-area" class="mt-4"></div>
    `;

  // Attach event listener to About Class button
  document
    .getElementById("about-class-btn")
    .addEventListener("click", function () {
      document.getElementById("content-area").innerHTML = `
          <div id="class-details" class="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">About Class</h2>
              <div class="text-gray-900 dark:text-gray-400">
                  <p><strong>Room Name:</strong> ${roomName}</p>
                  <p><strong>Room Passkey:</strong> ${passkey}</p>
  
                  <!-- Input for Class Timing (Start and End Time) -->
                  <div class="my-4">
                      <label for="class-timing" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Class Timing</label>
                      <div class="flex items-center gap-2">
                          <input type="time" id="start-time" name="start-time"
                              class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="Start Time">
                          <span class="text-gray-900 dark:text-white">to</span>
                          <input type="time" id="end-time" name="end-time"
                              class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="End Time">
                      </div>
                  </div>
  
                  <!-- Input for Topics -->
                  <div class="mb-4">
                      <label for="topics" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Topics to Be Covered</label>
                      <textarea id="topics" name="topics" rows="4" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="List topics separated by commas"></textarea>
                  </div>
  
                  <!-- Save button -->
                  <button id="save-class-info" class="mt-4 w-full text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-500 dark:hover:bg-blue-600">
                      Save Class Info
                  </button>
              </div>
          </div>
      `;

      // Add functionality for saving class information
      document
        .getElementById("save-class-info")
        .addEventListener("click", function () {
          const startTime = document.getElementById("start-time").value;
          const endTime = document.getElementById("end-time").value;
          const topics = document
            .getElementById("topics")
            .value.split(",")
            .map((topic) => topic.trim());

          if (startTime && endTime && topics.length > 0) {
            alert(
              `Class Info Saved!\nTiming: ${startTime} - ${endTime}\nTopics: ${topics.join(
                ", "
              )}`
            );
            // Logic to save the class info to backend or server would go here
          } else {
            alert("Please fill in all fields.");
          }
        });
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
              <button id="record-btn" class="p-2 bg-gray-800 text-white rounded-full w-12 h-12">
                  <i class="fas fa-circle"></i>
              </button>
              <button id="leave-btn" class="p-2 bg-gray-800 text-white rounded-full w-12 h-12">
                  <i class="fa-solid fa-arrow-right-from-bracket"></i>
              </button>
          </div>
      `;

      const videoElement = document.getElementById("local-video");
      let mediaRecorder;
      let recordedChunks = [];

      try {
        // Request access to the user's camera and microphone
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true,
        });
        videoElement.srcObject = stream;

        // Initialize media recorder
        mediaRecorder = new MediaRecorder(stream);

        mediaRecorder.ondataavailable = function (event) {
          if (event.data.size > 0) {
            recordedChunks.push(event.data);
          }
        };

        mediaRecorder.onstop = function () {
          const blob = new Blob(recordedChunks, {
            type: "video/webm",
          });
          const url = URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.href = url;
          a.download = "class-recording.webm";
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
        };
      } catch (error) {
        console.error("Error accessing media devices.", error);
      }

      // Toggle video
      document
        .getElementById("video-toggle-btn")
        .addEventListener("click", function () {
          const stream = videoElement.srcObject;
          const videoTrack = stream.getVideoTracks()[0];
          videoTrack.enabled = !videoTrack.enabled;
          this.querySelector("i").classList.toggle("fa-video");
          this.querySelector("i").classList.toggle("fa-video-slash");
        });

      // Toggle audio
      document
        .getElementById("audio-toggle-btn")
        .addEventListener("click", function () {
          const stream = videoElement.srcObject;
          const audioTrack = stream.getAudioTracks()[0];
          audioTrack.enabled = !audioTrack.enabled;
          this.querySelector("i").classList.toggle("fa-microphone");
          this.querySelector("i").classList.toggle("fa-microphone-slash");
        });

      // Screen sharing
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

      // Start and stop recording
      document
        .getElementById("record-btn")
        .addEventListener("click", function () {
          if (mediaRecorder.state === "inactive") {
            mediaRecorder.start();
            this.querySelector("i").classList.remove("fa-circle");
            this.querySelector("i").classList.add("fa-stop-circle");
            this.title = "Stop Recording";
          } else {
            mediaRecorder.stop();
            this.querySelector("i").classList.remove("fa-stop-circle");
            this.querySelector("i").classList.add("fa-circle");
            this.title = "Start Recording";
          }
        });

      // Leave the video chat
      document
        .getElementById("leave-btn")
        .addEventListener("click", function () {
          const stream = videoElement.srcObject;
          const tracks = stream.getTracks();

          tracks.forEach((track) => {
            track.stop();
          });

          videoElement.srcObject = null;
          document.getElementById("content-area").innerHTML =
            "<p>You left the video chat.</p>";
        });
    });

  document
    .getElementById("upload-notes-btn")
    .addEventListener("click", function () {
      document.getElementById("content-area").innerHTML = `
          <div id="upload-notes-section" class="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Upload Class Notes for ${roomName}</h2>
              </h2>
              <form id="upload-note-form" class="mb-6 flex gap-4 items-center">
                  <div class="flex-1">
                      <label for="note-title" class="sr-only">Note Title</label>
                      <input type="text" id="note-title" class="p-2 h-12 w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-700 dark:text-white" placeholder="Enter the title of the note">
                  </div>
                  <div>
                      <label for="note-file" class="sr-only">Upload File</label>
                      <input type="file" id="note-file" class="h-12 p-2 text-sm text-gray-500 border border-gray-300 rounded-lg cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600">
                  </div>
                  <div>
                      <button type="submit" class="h-12 text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-6 py-2 dark:bg-blue-500 dark:hover:bg-blue-600">
                          Upload
                      </button>
                  </div>
              </form>

              <div id="uploaded-notes" class="mt-6">
                  <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-4">Uploaded Notes</h3>
                  <div id="notes-list"></div>
              </div>
          </div>
      `;

      const notes = [];

      document
        .getElementById("upload-note-form")
        .addEventListener("submit", function (e) {
          e.preventDefault();

          const noteTitle = document.getElementById("note-title").value;
          const noteFile = document.getElementById("note-file").files[0];

          if (noteTitle && noteFile) {
            const noteSize = (noteFile.size / (1024 * 1024)).toFixed(2) + " MB";
            const notePages = "Unknown Pages"; // You can adjust this if you have a way to calculate pages
            const notePath = URL.createObjectURL(noteFile);

            const note = {
              name: noteTitle,
              size: noteSize,
              pages: notePages,
              path: notePath,
            };

            notes.push(note);
            displayNotes(notes);
            document.getElementById("upload-note-form").reset();
          }
        });

      function displayNotes(notes) {
        const notesList = notes
          .map(
            (note) => `
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
                          ${note.name}
                      </span>
                      <span class="flex text-xs font-normal text-gray-500 dark:text-gray-400 gap-2 mt-1">
                          ${note.pages} 
                          <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="self-center" width="3" height="4" viewBox="0 0 3 4" fill="none">
                              <circle cx="1.5" cy="2" r="1.5" fill="#6B7280"/>
                          </svg>
                          ${note.size} 
                          <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="self-center" width="3" height="4" viewBox="0 0 3 4" fill="none">
                              <circle cx="1.5" cy="2" r="1.5" fill="#6B7280"/>
                          </svg>
                          PDF
                      </span>
                  </div>
                  <div class="flex-shrink-0">
                      <a href="${note.path}" download class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-600">
                          <svg class="w-6 h-6 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                              <path fill-rule="evenodd" d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" clip-rule="evenodd"/>
                              <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"/>
                          </svg>
                      </a>
                  </div>
              </div>
          `
          )
          .join("");

        document.getElementById("notes-list").innerHTML = notesList;
      }
    });

  document
    .getElementById("summary-feedback-btn")
    .addEventListener("click", function () {
      document.getElementById("content-area").innerHTML = `
          <div id="summary-feedback-section" class="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Student Summaries and Feedback</h2>

              <!-- List of summaries and feedback -->
              <div id="feedback-list" class="space-y-4">
                  <!-- Dynamic content goes here -->
              </div>
          </div>
      `;

      const feedbackData = [
        {
          studentName: "John Doe",
          summary: "Great class! I learned a lot about AI.",
          feedback: "Please provide more examples.",
        },
        {
          studentName: "Jane Smith",
          summary: "The session was informative.",
          feedback: "It would be helpful to have more interactive activities.",
        },
      ];

      displayFeedback(feedbackData);

      function displayFeedback(feedbacks) {
        const feedbackList = document.getElementById("feedback-list");
        feedbackList.innerHTML = feedbacks
          .map(
            (feedback) => `
            <div class="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg shadow">
                <div class="flex justify-between">
                    <span class="font-bold text-gray-900 dark:text-white">${feedback.studentName}</span>
                </div>
                <div class="mt-2">
                    <p class="text-sm text-gray-900 dark:text-white"><strong>Summary:</strong> ${feedback.summary}</p>
                    <p class="text-sm text-gray-600 dark:text-gray-300 mt-1"><strong>Feedback:</strong> ${feedback.feedback}</p>
                </div>
            </div>
          `
          )
          .join("");
      }
    });

  document
    .getElementById("solve-doubts-btn")
    .addEventListener("click", function () {
      document.getElementById("content-area").innerHTML = `
          <div id="solve-doubts" class="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Solve Student Doubts</h2>
              
              <!-- Doubts list -->
              <div id="doubts-list" class="space-y-4">
                  <!-- Doubt items will be dynamically populated here -->
              </div>
          </div>
      `;

      const doubtsData = [
        {
          studentName: "John Doe",
          doubt: "Can you explain the concept of closures in JavaScript?",
        },
        {
          studentName: "Jane Smith",
          doubt: "I don't understand how event delegation works.",
        },
      ];

      displayDoubts(doubtsData);

      function displayDoubts(doubts) {
        const doubtsList = document.getElementById("doubts-list");
        doubtsList.innerHTML = doubts
          .map(
            (doubt, index) => `
              <div class="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg shadow">
                  <div class="flex justify-between">
                      <span class="font-bold text-gray-900 dark:text-white">${doubt.studentName}</span>
                  </div>
                  <div class="mt-2">
                      <p class="text-sm text-gray-900 dark:text-gray-200"><strong>Doubt:</strong> ${doubt.doubt}</p>
                  </div>
                  <div class="mt-4">
                      <label for="solution-${index}" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Write Solution</label>
                      <textarea id="solution-${index}" rows="3" class="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm text-gray-900 dark:text-gray-200 bg-white dark:bg-gray-800 focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Write your solution here"></textarea>
                  </div>
                  <div class="mt-2">
                      <button class="submit-solution-btn px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600" data-student="${doubt.studentName}" data-index="${index}">Submit Solution</button>
                  </div>
              </div>
          `
          )
          .join("");
      }

      document.querySelectorAll(".submit-solution-btn").forEach((button) => {
        button.addEventListener("click", function () {
          const index = this.getAttribute("data-index");
          const studentName = this.getAttribute("data-student");
          const solution = document.getElementById(`solution-${index}`).value;

          if (solution) {
            alert(`Solution submitted for ${studentName}: ${solution}`);
            // Reset the textarea after submission
            document.getElementById(`solution-${index}`).value = "";
          } else {
            alert("Please write a solution before submitting.");
          }
        });
      });
    });

  document
    .getElementById("notice-board-btn")
    .addEventListener("click", function () {
      document.getElementById("content-area").innerHTML = `
          <div id="notice-board" class="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
              <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-4">Manage Notice Board for ${roomName}</h2>
              <form id="notice-form" class="space-y-4">
                  <div>
                      <label for="notice-title" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Notice Title</label>
                      <input type="text" id="notice-title" class="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm text-gray-900 dark:text-gray-200 bg-white dark:bg-gray-800 focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Enter notice title" required>
                  </div>
                  <div>
                      <label for="notice-details" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Notice Details</label>
                      <textarea id="notice-details" rows="4" class="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm text-gray-900 dark:text-gray-200 bg-white dark:bg-gray-800 focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Enter details for the notice" required></textarea>
                  </div>
                  <div>
                      <button type="submit" class="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">Submit Notice</button>
                  </div>
              </form>

              <h3 class="text-lg font-bold text-gray-900 dark:text-white mt-8 mb-4">Current Notices</h3>
              <ul id="notices-list" class="list-disc pl-6 space-y-2">
                  <!-- Notices will be dynamically displayed here -->
              </ul>
          </div>
      `;

      const notices = [];

      // Handle form submission for adding a notice
      document
        .getElementById("notice-form")
        .addEventListener("submit", function (e) {
          e.preventDefault();

          const title = document.getElementById("notice-title").value;
          const details = document.getElementById("notice-details").value;

          if (title && details) {
            const newNotice = { title, details };
            notices.push(newNotice);
            displayNotices(notices);

            // Reset the form after submission
            document.getElementById("notice-form").reset();
          } else {
            alert("Please fill in all fields before submitting.");
          }
        });

      function displayNotices(noticesArray) {
        const noticesList = document.getElementById("notices-list");
        noticesList.innerHTML = noticesArray
          .map(
            (notice) => `
            <li class="text-gray-600 dark:text-gray-400">
                <div class="font-medium">${notice.title}</div>
                <div class="text-sm text-gray-500 dark:text-gray-400">${notice.details}</div>
            </li>
          `
          )
          .join("");
      }
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
