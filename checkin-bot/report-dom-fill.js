let lastMsg = `Please don't change any of the id names. Your addicted programmer thank you.`
let textAnswer = 'automated with botv1'

let idsToClick = [
  'report_understanding_score_5',
  'instructor_rated_staff_github_javiermortiz',
  'instructor_score_5',
  'pace_score_3',
  'lecture_score_4',
  'coding_tasks_score_4',
  'q_and_a_score_4',
  'comfortable_asking_questions_score_4',
  'useful_question_help_score_4',
  'engagement_score_4',
  'demonstrate_learning_score_4',
  'skill_development_score_4',
  'instructor_knowledge_score_4',
  'instructor_teaching_score_4',
  'weekly_feedback_stress_score_1',
  'weekly_feedback_enjoyment_score_5',
]

idsToClick.forEach(id => document.getElementById(id).click())

document.querySelectorAll('textarea').forEach(textArea => {
  textArea.innerText = 'automated with botv1';
});

document.getElementById('weekly_feedback_additional_comments').innerText = lastMsg;

document.getElementById('submit').click()
