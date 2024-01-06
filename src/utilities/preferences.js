const prompts = [
  {
    id: 0,
    heading: "To continue, please help us understand your preferences",
    name: "reason",
    question: "What is your main reason for therapy?",
    options: ["Anxiety", "Depression", "Relationships", "Trauma", "Other"],
    elaborate: true,
    elaboration: {
      choice: 4,
      placeholder: "Please specify the reason",
    },
  },
  {
    id: 1,
    name: "therapyExperience",
    question: "Do you have any previous therapy experience?",
    options: ["Yes", "No"],
    elaborate: true,
    elaboration: {
      choice: 0,
      placeholder: "Please briefly describe your experience",
    },
  },
  {
    id: 2,
    name: "sessionFormat",
    question: "Preferred session format",
    options: ["Video", "Phone", "Text", "No Preference"],
    elaborate: false,
  },
  {
    id: 3,
    name: "therapistGender",
    question: "Do you have a gender preference for your therapist",
    options: ["Male", "Female", "No Preference"],
    elaborate: false,
  },
  {
    id: 4,
    name: "therapistAge",
    question: "Do you have an age preference for your therapist",
    options: ["Young", "Same Age", "Old", "No Preference"],
    elaborate: false,
  },
];

export default prompts;
