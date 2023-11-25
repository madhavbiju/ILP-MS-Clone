const chatInput = document.querySelector(".chat-input");
const sendButton = document.querySelector(".send-btn");
const chatContainer = document.querySelector(".chat-container");

const API_KEY = config.PALM_KEY;
let UserText = null;

const createChatElement = (content, className) => {
  const chatDiv = document.createElement("div");
  chatDiv.classList.add("chat", className);
  chatDiv.innerHTML = content;
  return chatDiv;
};

const getChatResponse = async (inChatDiv) => {
  const API_ENDPOINT =
    "https://generativelanguage.googleapis.com/v1beta2/models/chat-bison-001:generateMessage?key=" +
    API_KEY;

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prompt: {
        context: "",
        examples: [],
        messages: [
          {
            content: UserText,
          },
        ],
      },
      temperature: 0.25,
      top_k: 40,
      top_p: 0.95,
      candidate_count: 1,
    }),
  };

  try {
    const response = await fetch(API_ENDPOINT, requestOptions);
    const data = await response.json();
    if (
      data.filters &&
      data.filters.length > 0 &&
      data.filters[0].reason === "OTHER"
    ) {
      inChatDiv.querySelector(".typing-animation").remove();
      const errorMessage = "Sorry, I can't assist you with this.";
      const errorElement = document.createElement("p");
      errorElement.textContent = errorMessage;
      inChatDiv.querySelector(".chat-details").appendChild(errorElement);
    } else if (
      data.candidates &&
      data.candidates.length > 0 &&
      data.candidates[0].content
    ) {
      inChatDiv.querySelector(".typing-animation").remove();
      const message = data.candidates[0].content;
      const messageElement = document.createElement("p");
      messageElement.textContent = message;
      inChatDiv.querySelector(".chat-details").appendChild(messageElement);
    } else {
      throw new Error("API call failed");
    }
  } catch (error) {
    inChatDiv.querySelector(".typing-animation").remove();
    const errorElement = document.createElement("p");
    errorElement.classList.add("error");
    errorElement.textContent =
      "Oops! Something went wrong while retrieving the response. Please try again.";
    inChatDiv.querySelector(".chat-details").appendChild(errorElement);
  }

  localStorage.setItem("all-chats", chatContainer.innerHTML);
  chatContainer.scrollTo(0, chatContainer.scrollHeight);
};

const showTypingAnimation = () => {
  const html = `<div class="chat-content">
                    <div class="chat-details">
                        <img src="./assets/robot.png" alt="chatbot-img">
                        <div class="typing-animation">
                            <div class="typing-dot" style="--delay: 0.2s"></div>
                            <div class="typing-dot" style="--delay: 0.3s"></div>
                            <div class="typing-dot" style="--delay: 0.4s"></div>
                        </div>
                    </div>
                </div>`;
  const inChatDiv = createChatElement(html, "incoming");
  chatContainer.appendChild(inChatDiv);
  chatContainer.scrollTo(0, chatContainer.scrollHeight);
  getChatResponse(inChatDiv);
};

const handleOutgoingChat = () => {
  UserText = chatInput.value.trim();
  if (!UserText) return;

  chatInput.value = "";
  chatInput.style.height = `${initialInputHeight}px`;

  const html = `<div class="chat-content">
                    <div class="chat-details">
                        <img src="./assets/Sample_User_Icon.png" alt="user-img">
                        <p>${UserText}</p>
                    </div>
                </div>`;

  const outChatDiv = createChatElement(html, "outgoing");
  chatContainer.appendChild(outChatDiv);
  chatContainer.scrollTo(0, chatContainer.scrollHeight);
  setTimeout(showTypingAnimation, 500);
  getChatResponse(outChatDiv);
};

const initialInputHeight = chatInput.scrollHeight;

chatInput.addEventListener("input", () => {
  chatInput.style.height = `${initialInputHeight}px`;
  chatInput.style.height = `${chatInput.scrollHeight}px`;
});

chatInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
    e.preventDefault();
    handleOutgoingChat();
  }
});

sendButton.addEventListener("click", handleOutgoingChat);
