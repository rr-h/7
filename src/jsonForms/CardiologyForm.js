import React from 'react';

function CardiologyForm() {
  return (
    <div>
  <title>Cardiology Form</title>
  <form action="submit_form_endpoint" method="post">
    <fieldset>
      <legend>Coronary Artery Disease</legend>
      <label htmlFor="ConditionID">ConditionID: </label>
      <input type="text" name="ConditionID" defaultValue="C1" />
      <br />
      <label htmlFor="ConditionName">ConditionName: </label>
      <input
        type="text"
        name="ConditionName"
        defaultValue="Coronary Artery Disease"
      />
      <br />
      <label htmlFor="ChiefComplaint">ChiefComplaint: </label>
      <input
        type="text"
        name="ChiefComplaint"
        defaultValue="Chest pain on exertion, shortness of breath."
      />
      <br />
      <label htmlFor="SocialHistory">SocialHistory: </label>
      <input
        type="text"
        name="SocialHistory"
        defaultValue="History of smoking, hypertension, diabetes, hyperlipidemia."
      />
      <br />
      <label htmlFor="SystemsSurvey">SystemsSurvey: </label>
      <input
        type="text"
        name="SystemsSurvey"
        defaultValue="Affects cardiovascular system."
      />
      <br />
      <label htmlFor="Vitals">Vitals: </label>
      <input
        type="text"
        name="Vitals"
        defaultValue="BP 140/90, HR 78, Temp 37°C"
      />
      <br />
      <label htmlFor="PhysicalExam">PhysicalExam: </label>
      <input
        type="text"
        name="PhysicalExam"
        defaultValue="May have normal examination; signs of heart failure might be present in advanced cases."
      />
      <br />
      <label htmlFor="Impression">Impression: </label>
      <input
        type="text"
        name="Impression"
        defaultValue="Coronary Artery Disease"
      />
      <br />
      <label htmlFor="DifferentialDiagnosis">DifferentialDiagnosis: </label>
      <input
        type="text"
        name="DifferentialDiagnosis"
        defaultValue="Gastroesophageal reflux disease, anxiety"
      />
      <br />
      <label htmlFor="Allergies">Allergies: </label>
      <input type="text" name="Allergies" defaultValue="None" />
      <br />
      <label htmlFor="Pregnancy">Pregnancy: </label>
      <input type="text" name="Pregnancy" defaultValue="denies" />
      <br />
      <label htmlFor="Treatment">Treatment: </label>
      <input
        type="text"
        name="Treatment"
        defaultValue="Lifestyle modifications, statins, aspirin, beta-blockers"
      />
      <br />
      <label htmlFor="CarePlan">CarePlan: </label>
      <input
        type="text"
        name="CarePlan"
        defaultValue="Regular monitoring of blood pressure and cholesterol, stress test as needed"
      />
      <br />
      <label htmlFor="Accurex">Accurex: </label>
      <input
        type="text"
        name="Accurex"
        defaultValue="Educate on symptom management and when to seek emergency care"
      />
      <br />
    </fieldset>
    <br />
    <fieldset>
      <legend>Heart Failure</legend>
      <label htmlFor="ConditionID">ConditionID: </label>
      <input type="text" name="ConditionID" defaultValue="C2" />
      <br />
      <label htmlFor="ConditionName">ConditionName: </label>
      <input type="text" name="ConditionName" defaultValue="Heart Failure" />
      <br />
      <label htmlFor="ChiefComplaint">ChiefComplaint: </label>
      <input
        type="text"
        name="ChiefComplaint"
        defaultValue="Shortness of breath, fatigue, swollen legs."
      />
      <br />
      <label htmlFor="SocialHistory">SocialHistory: </label>
      <input
        type="text"
        name="SocialHistory"
        defaultValue="Previous heart attack, hypertension, valvular heart disease."
      />
      <br />
      <label htmlFor="SystemsSurvey">SystemsSurvey: </label>
      <input
        type="text"
        name="SystemsSurvey"
        defaultValue="Affects cardiovascular, respiratory, and renal systems."
      />
      <br />
      <label htmlFor="Vitals">Vitals: </label>
      <input
        type="text"
        name="Vitals"
        defaultValue="BP 130/85, HR 92, Temp 37°C"
      />
      <br />
      <label htmlFor="PhysicalExam">PhysicalExam: </label>
      <input
        type="text"
        name="PhysicalExam"
        defaultValue="Crackles in lungs, pitting oedema in legs, jugular venous distension."
      />
      <br />
      <label htmlFor="Impression">Impression: </label>
      <input type="text" name="Impression" defaultValue="Heart Failure" />
      <br />
      <label htmlFor="DifferentialDiagnosis">DifferentialDiagnosis: </label>
      <input
        type="text"
        name="DifferentialDiagnosis"
        defaultValue="Chronic obstructive pulmonary disease, renal failure"
      />
      <br />
      <label htmlFor="Allergies">Allergies: </label>
      <input type="text" name="Allergies" defaultValue="None" />
      <br />
      <label htmlFor="Pregnancy">Pregnancy: </label>
      <input type="text" name="Pregnancy" defaultValue="denies" />
      <br />
      <label htmlFor="Treatment">Treatment: </label>
      <input
        type="text"
        name="Treatment"
        defaultValue="Diuretics, ACE inhibitors, beta-blockers, aldosterone antagonists"
      />
      <br />
      <label htmlFor="CarePlan">CarePlan: </label>
      <input
        type="text"
        name="CarePlan"
        defaultValue="Monitor fluid status, manage comorbid conditions, patient education on diet and activity"
      />
      <br />
      <label htmlFor="Accurex">Accurex: </label>
      <input
        type="text"
        name="Accurex"
        defaultValue="Regular echocardiograms to assess heart function, adjust medications as needed"
      />
      <br />
    </fieldset>
    <br />
    <fieldset>
      <legend>Atrial Fibrillation</legend>
      <label htmlFor="ConditionID">ConditionID: </label>
      <input type="text" name="ConditionID" defaultValue="C3" />
      <br />
      <label htmlFor="ConditionName">ConditionName: </label>
      <input
        type="text"
        name="ConditionName"
        defaultValue="Atrial Fibrillation"
      />
      <br />
      <label htmlFor="ChiefComplaint">ChiefComplaint: </label>
      <input
        type="text"
        name="ChiefComplaint"
        defaultValue="Palpitations, feeling faint, shortness of breath."
      />
      <br />
      <label htmlFor="SocialHistory">SocialHistory: </label>
      <input
        type="text"
        name="SocialHistory"
        defaultValue="Alcohol use, heart disease, hypertension, thyroid disease."
      />
      <br />
      <label htmlFor="SystemsSurvey">SystemsSurvey: </label>
      <input
        type="text"
        name="SystemsSurvey"
        defaultValue="Affects cardiovascular system."
      />
      <br />
      <label htmlFor="Vitals">Vitals: </label>
      <input
        type="text"
        name="Vitals"
        defaultValue="BP 120/80, HR irregularly irregular, Temp 37°C"
      />
      <br />
      <label htmlFor="PhysicalExam">PhysicalExam: </label>
      <input
        type="text"
        name="PhysicalExam"
        defaultValue="Irregular pulse, may be rapid; otherwise, physical exam often normal."
      />
      <br />
      <label htmlFor="Impression">Impression: </label>
      <input type="text" name="Impression" defaultValue="Atrial Fibrillation" />
      <br />
      <label htmlFor="DifferentialDiagnosis">DifferentialDiagnosis: </label>
      <input
        type="text"
        name="DifferentialDiagnosis"
        defaultValue="Heart palpitations from other causes, anxiety"
      />
      <br />
      <label htmlFor="Allergies">Allergies: </label>
      <input type="text" name="Allergies" defaultValue="None" />
      <br />
      <label htmlFor="Pregnancy">Pregnancy: </label>
      <input type="text" name="Pregnancy" defaultValue="denies" />
      <br />
      <label htmlFor="Treatment">Treatment: </label>
      <input
        type="text"
        name="Treatment"
        defaultValue="Rate control, rhythm control, anticoagulation to prevent stroke"
      />
      <br />
      <label htmlFor="CarePlan">CarePlan: </label>
      <input
        type="text"
        name="CarePlan"
        defaultValue="Education on stroke risk, regular monitoring with EKGs, manage underlying conditions"
      />
      <br />
      <label htmlFor="Accurex">Accurex: </label>
      <input
        type="text"
        name="Accurex"
        defaultValue="Assess for bleeding risk with anticoagulants, lifestyle modifications"
      />
      <br />
    </fieldset>
    <br />
    <fieldset>
      <legend>Hypertension</legend>
      <label htmlFor="ConditionID">ConditionID: </label>
      <input type="text" name="ConditionID" defaultValue="C4" />
      <br />
      <label htmlFor="ConditionName">ConditionName: </label>
      <input type="text" name="ConditionName" defaultValue="Hypertension" />
      <br />
      <label htmlFor="ChiefComplaint">ChiefComplaint: </label>
      <input
        type="text"
        name="ChiefComplaint"
        defaultValue="Often asymptomatic, detected on routine examination."
      />
      <br />
      <label htmlFor="SocialHistory">SocialHistory: </label>
      <input
        type="text"
        name="SocialHistory"
        defaultValue="Family history of hypertension, obesity, lack of physical activity."
      />
      <br />
      <label htmlFor="SystemsSurvey">SystemsSurvey: </label>
      <input
        type="text"
        name="SystemsSurvey"
        defaultValue="Affects cardiovascular system."
      />
      <br />
      <label htmlFor="Vitals">Vitals: </label>
      <input
        type="text"
        name="Vitals"
        defaultValue="BP 150/95, HR 80, Temp 37°C"
      />
      <br />
      <label htmlFor="PhysicalExam">PhysicalExam: </label>
      <input
        type="text"
        name="PhysicalExam"
        defaultValue="Physical exam generally normal; may find retinopathy in severe cases."
      />
      <br />
      <label htmlFor="Impression">Impression: </label>
      <input type="text" name="Impression" defaultValue="Hypertension" />
      <br />
      <label htmlFor="DifferentialDiagnosis">DifferentialDiagnosis: </label>
      <input
        type="text"
        name="DifferentialDiagnosis"
        defaultValue="Secondary causes of hypertension, such as renal artery stenosis"
      />
      <br />
      <label htmlFor="Allergies">Allergies: </label>
      <input type="text" name="Allergies" defaultValue="None" />
      <br />
      <label htmlFor="Pregnancy">Pregnancy: </label>
      <input type="text" name="Pregnancy" defaultValue="denies" />
      <br />
      <label htmlFor="Treatment">Treatment: </label>
      <input
        type="text"
        name="Treatment"
        defaultValue="Lifestyle changes, antihypertensive medications"
      />
      <br />
      <label htmlFor="CarePlan">CarePlan: </label>
      <input
        type="text"
        name="CarePlan"
        defaultValue="Regular blood pressure monitoring, adjust treatment based on targets"
      />
      <br />
      <label htmlFor="Accurex">Accurex: </label>
      <input
        type="text"
        name="Accurex"
        defaultValue="Educate on lifestyle interventions, importance of adherence to medication"
      />
      <br />
    </fieldset>
    <br />
    <fieldset>
      <legend>Peripheral Artery Disease</legend>
      <label htmlFor="ConditionID">ConditionID: </label>
      <input type="text" name="ConditionID" defaultValue="C5" />
      <br />
      <label htmlFor="ConditionName">ConditionName: </label>
      <input
        type="text"
        name="ConditionName"
        defaultValue="Peripheral Artery Disease"
      />
      <br />
      <label htmlFor="ChiefComplaint">ChiefComplaint: </label>
      <input
        type="text"
        name="ChiefComplaint"
        defaultValue="Leg pain when walking, cold feet, leg numbness or weakness."
      />
      <br />
      <label htmlFor="SocialHistory">SocialHistory: </label>
      <input
        type="text"
        name="SocialHistory"
        defaultValue="Smoking, diabetes, high cholesterol, hypertension."
      />
      <br />
      <label htmlFor="SystemsSurvey">SystemsSurvey: </label>
      <input
        type="text"
        name="SystemsSurvey"
        defaultValue="Affects cardiovascular and peripheral vascular systems."
      />
      <br />
      <label htmlFor="Vitals">Vitals: </label>
      <input
        type="text"
        name="Vitals"
        defaultValue="BP 130/80, HR 75, Temp 37°C"
      />
      <br />
      <label htmlFor="PhysicalExam">PhysicalExam: </label>
      <input
        type="text"
        name="PhysicalExam"
        defaultValue="Decreased pulses in feet, may have bruits over arteries."
      />
      <br />
      <label htmlFor="Impression">Impression: </label>
      <input
        type="text"
        name="Impression"
        defaultValue="Peripheral Artery Disease"
      />
      <br />
      <label htmlFor="DifferentialDiagnosis">DifferentialDiagnosis: </label>
      <input
        type="text"
        name="DifferentialDiagnosis"
        defaultValue="Venous insufficiency, neuropathy"
      />
      <br />
      <label htmlFor="Allergies">Allergies: </label>
      <input type="text" name="Allergies" defaultValue="None" />
      <br />
      <label htmlFor="Pregnancy">Pregnancy: </label>
      <input type="text" name="Pregnancy" defaultValue="denies" />
      <br />
      <label htmlFor="Treatment">Treatment: </label>
      <input
        type="text"
        name="Treatment"
        defaultValue="Exercise therapy, statins, anti-platelet agents"
      />
      <br />
      <label htmlFor="CarePlan">CarePlan: </label>
      <input
        type="text"
        name="CarePlan"
        defaultValue="Walking program, smoking cessation, manage cardiovascular risk factors"
      />
      <br />
      <label htmlFor="Accurex">Accurex: </label>
      <input
        type="text"
        name="Accurex"
        defaultValue="Follow-up for symptom progression, consider revascularization if symptoms worsen"
      />
      <br />
    </fieldset>
    <br />
    <fieldset>
      <legend>Valvular Heart Disease</legend>
      <label htmlFor="ConditionID">ConditionID: </label>
      <input type="text" name="ConditionID" defaultValue="C6" />
      <br />
      <label htmlFor="ConditionName">ConditionName: </label>
      <input
        type="text"
        name="ConditionName"
        defaultValue="Valvular Heart Disease"
      />
      <br />
      <label htmlFor="ChiefComplaint">ChiefComplaint: </label>
      <input
        type="text"
        name="ChiefComplaint"
        defaultValue="Shortness of breath, fatigue, irregular heartbeat."
      />
      <br />
      <label htmlFor="SocialHistory">SocialHistory: </label>
      <input
        type="text"
        name="SocialHistory"
        defaultValue="History of rheumatic fever, congenital valve defects, age-related changes."
      />
      <br />
      <label htmlFor="SystemsSurvey">SystemsSurvey: </label>
      <input
        type="text"
        name="SystemsSurvey"
        defaultValue="Affects cardiovascular system; may lead to heart failure."
      />
      <br />
      <label htmlFor="Vitals">Vitals: </label>
      <input
        type="text"
        name="Vitals"
        defaultValue="BP 130/80 mmHg, HR 78 bpm"
      />
      <br />
      <label htmlFor="PhysicalExam">PhysicalExam: </label>
      <input
        type="text"
        name="PhysicalExam"
        defaultValue="Heart murmur, possible signs of heart failure."
      />
      <br />
      <label htmlFor="Impression">Impression: </label>
      <input
        type="text"
        name="Impression"
        defaultValue="Valvular Heart Disease"
      />
      <br />
      <label htmlFor="DifferentialDiagnosis">DifferentialDiagnosis: </label>
      <input
        type="text"
        name="DifferentialDiagnosis"
        defaultValue="Heart failure, myocardial infarction, hypertrophic cardiomyopathy"
      />
      <br />
      <label htmlFor="Allergies">Allergies: </label>
      <input type="text" name="Allergies" defaultValue="None" />
      <br />
      <label htmlFor="Pregnancy">Pregnancy: </label>
      <input type="text" name="Pregnancy" defaultValue="denies" />
      <br />
      <label htmlFor="Treatment">Treatment: </label>
      <input
        type="text"
        name="Treatment"
        defaultValue="Medications to manage symptoms, surgical repair or replacement of the valve"
      />
      <br />
      <label htmlFor="CarePlan">CarePlan: </label>
      <input
        type="text"
        name="CarePlan"
        defaultValue="Regular echocardiograms, manage risk factors for coronary artery disease"
      />
      <br />
      <label htmlFor="Accurex">Accurex: </label>
      <input
        type="text"
        name="Accurex"
        defaultValue="Assess for progression of disease, consider intervention if symptoms worsen"
      />
      <br />
    </fieldset>
    <br />
    <fieldset>
      <legend>Myocarditis</legend>
      <label htmlFor="ConditionID">ConditionID: </label>
      <input type="text" name="ConditionID" defaultValue="C7" />
      <br />
      <label htmlFor="ConditionName">ConditionName: </label>
      <input type="text" name="ConditionName" defaultValue="Myocarditis" />
      <br />
      <label htmlFor="ChiefComplaint">ChiefComplaint: </label>
      <input
        type="text"
        name="ChiefComplaint"
        defaultValue="Chest pain, shortness of breath, fatigue."
      />
      <br />
      <label htmlFor="SocialHistory">SocialHistory: </label>
      <input
        type="text"
        name="SocialHistory"
        defaultValue="Viral infections, autoimmune diseases, exposure to toxins."
      />
      <br />
      <label htmlFor="SystemsSurvey">SystemsSurvey: </label>
      <input
        type="text"
        name="SystemsSurvey"
        defaultValue="Inflammation of the heart muscle, affecting the hearts electrical system and pumping function."
      />
      <br />
      <label htmlFor="Vitals">Vitals: </label>
      <input
        type="text"
        name="Vitals"
        defaultValue="BP 120/80 mmHg, HR 90 bpm"
      />
      <br />
      <label htmlFor="PhysicalExam">PhysicalExam: </label>
      <input
        type="text"
        name="PhysicalExam"
        defaultValue="Possible fever, heart sounds may include murmurs or rubs."
      />
      <br />
      <label htmlFor="Impression">Impression: </label>
      <input type="text" name="Impression" defaultValue="Myocarditis" />
      <br />
      <label htmlFor="DifferentialDiagnosis">DifferentialDiagnosis: </label>
      <input
        type="text"
        name="DifferentialDiagnosis"
        defaultValue="Acute coronary syndrome, pericarditis"
      />
      <br />
      <label htmlFor="Allergies">Allergies: </label>
      <input type="text" name="Allergies" defaultValue="None" />
      <br />
      <label htmlFor="Pregnancy">Pregnancy: </label>
      <input type="text" name="Pregnancy" defaultValue="denies" />
      <br />
      <label htmlFor="Treatment">Treatment: </label>
      <input
        type="text"
        name="Treatment"
        defaultValue="Supportive care, treat underlying cause, possible use of anti-inflammatory medications"
      />
      <br />
      <label htmlFor="CarePlan">CarePlan: </label>
      <input
        type="text"
        name="CarePlan"
        defaultValue="Monitor cardiac function, avoid strenuous activity until resolved"
      />
      <br />
      <label htmlFor="Accurex">Accurex: </label>
      <input
        type="text"
        name="Accurex"
        defaultValue="Regular follow-up, consider cardiac MRI for evaluation of recovery"
      />
      <br />
    </fieldset>
    <br />
    <fieldset>
      <legend>Deep Vein Thrombosis</legend>
      <label htmlFor="ConditionID">ConditionID: </label>
      <input type="text" name="ConditionID" defaultValue="C8" />
      <br />
      <label htmlFor="ConditionName">ConditionName: </label>
      <input
        type="text"
        name="ConditionName"
        defaultValue="Deep Vein Thrombosis"
      />
      <br />
      <label htmlFor="ChiefComplaint">ChiefComplaint: </label>
      <input
        type="text"
        name="ChiefComplaint"
        defaultValue="Pain and swelling in one leg, warmth over the affected area."
      />
      <br />
      <label htmlFor="SocialHistory">SocialHistory: </label>
      <input
        type="text"
        name="SocialHistory"
        defaultValue="Prolonged sitting or immobility, recent surgery, history of clotting disorders."
      />
      <br />
      <label htmlFor="SystemsSurvey">SystemsSurvey: </label>
      <input
        type="text"
        name="SystemsSurvey"
        defaultValue="A clot in a deep vein, usually in the legs, which can lead to pulmonary embolism."
      />
      <br />
      <label htmlFor="Vitals">Vitals: </label>
      <input
        type="text"
        name="Vitals"
        defaultValue="BP 120/80 mmHg, HR 70 bpm"
      />
      <br />
      <label htmlFor="PhysicalExam">PhysicalExam: </label>
      <input
        type="text"
        name="PhysicalExam"
        defaultValue="Swelling, redness, warmth in the affected leg."
      />
      <br />
      <label htmlFor="Impression">Impression: </label>
      <input
        type="text"
        name="Impression"
        defaultValue="Deep Vein Thrombosis"
      />
      <br />
      <label htmlFor="DifferentialDiagnosis">DifferentialDiagnosis: </label>
      <input
        type="text"
        name="DifferentialDiagnosis"
        defaultValue="Muscle strain, cellulitis"
      />
      <br />
      <label htmlFor="Allergies">Allergies: </label>
      <input type="text" name="Allergies" defaultValue="None" />
      <br />
      <label htmlFor="Pregnancy">Pregnancy: </label>
      <input type="text" name="Pregnancy" defaultValue="denies" />
      <br />
      <label htmlFor="Treatment">Treatment: </label>
      <input
        type="text"
        name="Treatment"
        defaultValue="Anticoagulant therapy"
      />
      <br />
      <label htmlFor="CarePlan">CarePlan: </label>
      <input
        type="text"
        name="CarePlan"
        defaultValue="Wearing compression stockings, regular follow-up for anticoagulation therapy"
      />
      <br />
      <label htmlFor="Accurex">Accurex: </label>
      <input
        type="text"
        name="Accurex"
        defaultValue="Evaluate for post-thrombotic syndrome, adjust anticoagulant as needed"
      />
      <br />
    </fieldset>
    <br />
    <fieldset>
      <legend>Cardiac Arrhythmia</legend>
      <label htmlFor="ConditionID">ConditionID: </label>
      <input type="text" name="ConditionID" defaultValue="C9" />
      <br />
      <label htmlFor="ConditionName">ConditionName: </label>
      <input
        type="text"
        name="ConditionName"
        defaultValue="Cardiac Arrhythmia"
      />
      <br />
      <label htmlFor="ChiefComplaint">ChiefComplaint: </label>
      <input
        type="text"
        name="ChiefComplaint"
        defaultValue="Palpitations, dizziness, fainting."
      />
      <br />
      <label htmlFor="SocialHistory">SocialHistory: </label>
      <input
        type="text"
        name="SocialHistory"
        defaultValue="Electrolyte imbalances, heart disease, medication side effects."
      />
      <br />
      <label htmlFor="SystemsSurvey">SystemsSurvey: </label>
      <input
        type="text"
        name="SystemsSurvey"
        defaultValue="Irregular heartbeats that can be too fast, too slow, or erratic."
      />
      <br />
      <label htmlFor="Vitals">Vitals: </label>
      <input
        type="text"
        name="Vitals"
        defaultValue="Irregular pulse, HR variable"
      />
      <br />
      <label htmlFor="PhysicalExam">PhysicalExam: </label>
      <input
        type="text"
        name="PhysicalExam"
        defaultValue="Irregular heartbeat noted on auscultation."
      />
      <br />
      <label htmlFor="Impression">Impression: </label>
      <input type="text" name="Impression" defaultValue="Cardiac Arrhythmia" />
      <br />
      <label htmlFor="DifferentialDiagnosis">DifferentialDiagnosis: </label>
      <input
        type="text"
        name="DifferentialDiagnosis"
        defaultValue="Anxiety, panic attacks, atrial fibrillation"
      />
      <br />
      <label htmlFor="Allergies">Allergies: </label>
      <input type="text" name="Allergies" defaultValue="None" />
      <br />
      <label htmlFor="Pregnancy">Pregnancy: </label>
      <input type="text" name="Pregnancy" defaultValue="denies" />
      <br />
      <label htmlFor="Treatment">Treatment: </label>
      <input
        type="text"
        name="Treatment"
        defaultValue="Medication to control heart rate or rhythm, possible ablation or pacemaker"
      />
      <br />
      <label htmlFor="CarePlan">CarePlan: </label>
      <input
        type="text"
        name="CarePlan"
        defaultValue="Regular monitoring with ECG, lifestyle modifications"
      />
      <br />
      <label htmlFor="Accurex">Accurex: </label>
      <input
        type="text"
        name="Accurex"
        defaultValue="Adjust treatment based on symptoms and ECG findings, educate on symptom management"
      />
      <br />
    </fieldset>
    <br />
    <fieldset>
      <legend>Aortic Aneurysm</legend>
      <label htmlFor="ConditionID">ConditionID: </label>
      <input type="text" name="ConditionID" defaultValue="C10" />
      <br />
      <label htmlFor="ConditionName">ConditionName: </label>
      <input type="text" name="ConditionName" defaultValue="Aortic Aneurysm" />
      <br />
      <label htmlFor="ChiefComplaint">ChiefComplaint: </label>
      <input
        type="text"
        name="ChiefComplaint"
        defaultValue="Often asymptomatic, may be detected during imaging for another reason."
      />
      <br />
      <label htmlFor="SocialHistory">SocialHistory: </label>
      <input
        type="text"
        name="SocialHistory"
        defaultValue="Smoking, hypertension, genetic factors."
      />
      <br />
      <label htmlFor="SystemsSurvey">SystemsSurvey: </label>
      <input
        type="text"
        name="SystemsSurvey"
        defaultValue="A bulge in the aorta that can rupture, leading to life-threatening bleeding."
      />
      <br />
      <label htmlFor="Vitals">Vitals: </label>
      <input
        type="text"
        name="Vitals"
        defaultValue="BP 130/85 mmHg, HR 72 bpm"
      />
      <br />
      <label htmlFor="PhysicalExam">PhysicalExam: </label>
      <input
        type="text"
        name="PhysicalExam"
        defaultValue="Pulsatile abdominal mass, bruit over the aneurysm."
      />
      <br />
      <label htmlFor="Impression">Impression: </label>
      <input type="text" name="Impression" defaultValue="Aortic Aneurysm" />
      <br />
      <label htmlFor="DifferentialDiagnosis">DifferentialDiagnosis: </label>
      <input
        type="text"
        name="DifferentialDiagnosis"
        defaultValue="Renal artery stenosis, gastrointestinal conditions"
      />
      <br />
      <label htmlFor="Allergies">Allergies: </label>
      <input type="text" name="Allergies" defaultValue="None" />
      <br />
      <label htmlFor="Pregnancy">Pregnancy: </label>
      <input type="text" name="Pregnancy" defaultValue="denies" />
      <br />
      <label htmlFor="Treatment">Treatment: </label>
      <input
        type="text"
        name="Treatment"
        defaultValue="Monitoring of aneurysm size, blood pressure control, surgery for large or symptomatic aneurysms"
      />
      <br />
      <label htmlFor="CarePlan">CarePlan: </label>
      <input
        type="text"
        name="CarePlan"
        defaultValue="Regular ultrasound or CT scans to monitor size, manage risk factors for atherosclerosis"
      />
      <br />
      <label htmlFor="Accurex">Accurex: </label>
      <input
        type="text"
        name="Accurex"
        defaultValue="Surgical consultation for aneurysms approaching surgical threshold"
      />
      <br />
    </fieldset>
    <br />
    <fieldset>
      <legend>Takotsubo Cardiomyopathy</legend>
      <label htmlFor="ConditionID">ConditionID: </label>
      <input type="text" name="ConditionID" defaultValue="C11" />
      <br />
      <label htmlFor="ConditionName">ConditionName: </label>
      <input
        type="text"
        name="ConditionName"
        defaultValue="Takotsubo Cardiomyopathy"
      />
      <br />
      <label htmlFor="ChiefComplaint">ChiefComplaint: </label>
      <input
        type="text"
        name="ChiefComplaint"
        defaultValue="Chest pain, shortness of breath, similar to heart attack symptoms."
      />
      <br />
      <label htmlFor="SocialHistory">SocialHistory: </label>
      <input
        type="text"
        name="SocialHistory"
        defaultValue="Often triggered by severe stress or emotional loss."
      />
      <br />
      <label htmlFor="SystemsSurvey">SystemsSurvey: </label>
      <input
        type="text"
        name="SystemsSurvey"
        defaultValue="Temporary weakening of the hearts left ventricle."
      />
      <br />
      <label htmlFor="Vitals">Vitals: </label>
      <input
        type="text"
        name="Vitals"
        defaultValue="BP 130/80 mmHg, HR 88 bpm"
      />
      <br />
      <label htmlFor="PhysicalExam">PhysicalExam: </label>
      <input
        type="text"
        name="PhysicalExam"
        defaultValue="May have a normal exam or signs mimicking a heart attack."
      />
      <br />
      <label htmlFor="Impression">Impression: </label>
      <input
        type="text"
        name="Impression"
        defaultValue="Takotsubo Cardiomyopathy"
      />
      <br />
      <label htmlFor="DifferentialDiagnosis">DifferentialDiagnosis: </label>
      <input
        type="text"
        name="DifferentialDiagnosis"
        defaultValue="Acute coronary syndrome, myocarditis"
      />
      <br />
      <label htmlFor="Allergies">Allergies: </label>
      <input type="text" name="Allergies" defaultValue="None" />
      <br />
      <label htmlFor="Pregnancy">Pregnancy: </label>
      <input type="text" name="Pregnancy" defaultValue="denies" />
      <br />
      <label htmlFor="Treatment">Treatment: </label>
      <input
        type="text"
        name="Treatment"
        defaultValue="Supportive care, heart failure medications temporarily"
      />
      <br />
      <label htmlFor="CarePlan">CarePlan: </label>
      <input
        type="text"
        name="CarePlan"
        defaultValue="Avoidance of stressors, regular follow-up, echocardiography to monitor recovery"
      />
      <br />
      <label htmlFor="Accurex">Accurex: </label>
      <input
        type="text"
        name="Accurex"
        defaultValue="Educate on the temporary nature of the condition, potential for full recovery"
      />
      <br />
    </fieldset>
    <br />
    <fieldset>
      <legend>Rheumatic Heart Disease</legend>
      <label htmlFor="ConditionID">ConditionID: </label>
      <input type="text" name="ConditionID" defaultValue="C12" />
      <br />
      <label htmlFor="ConditionName">ConditionName: </label>
      <input
        type="text"
        name="ConditionName"
        defaultValue="Rheumatic Heart Disease"
      />
      <br />
      <label htmlFor="ChiefComplaint">ChiefComplaint: </label>
      <input
        type="text"
        name="ChiefComplaint"
        defaultValue="Heart murmur, shortness of breath, chest pain."
      />
      <br />
      <label htmlFor="SocialHistory">SocialHistory: </label>
      <input
        type="text"
        name="SocialHistory"
        defaultValue="History of rheumatic fever."
      />
      <br />
      <label htmlFor="SystemsSurvey">SystemsSurvey: </label>
      <input
        type="text"
        name="SystemsSurvey"
        defaultValue="Damage to heart valves as a result of rheumatic fever."
      />
      <br />
      <label htmlFor="Vitals">Vitals: </label>
      <input
        type="text"
        name="Vitals"
        defaultValue="BP 125/75 mmHg, HR 80 bpm"
      />
      <br />
      <label htmlFor="PhysicalExam">PhysicalExam: </label>
      <input
        type="text"
        name="PhysicalExam"
        defaultValue="Signs of valve stenosis or regurgitation on auscultation."
      />
      <br />
      <label htmlFor="Impression">Impression: </label>
      <input
        type="text"
        name="Impression"
        defaultValue="Rheumatic Heart Disease"
      />
      <br />
      <label htmlFor="DifferentialDiagnosis">DifferentialDiagnosis: </label>
      <input
        type="text"
        name="DifferentialDiagnosis"
        defaultValue="Infective endocarditis, congenital heart disease"
      />
      <br />
      <label htmlFor="Allergies">Allergies: </label>
      <input type="text" name="Allergies" defaultValue="None" />
      <br />
      <label htmlFor="Pregnancy">Pregnancy: </label>
      <input type="text" name="Pregnancy" defaultValue="denies" />
      <br />
      <label htmlFor="Treatment">Treatment: </label>
      <input
        type="text"
        name="Treatment"
        defaultValue="Penicillin prophylaxis to prevent recurrence, valve repair or replacement as needed"
      />
      <br />
      <label htmlFor="CarePlan">CarePlan: </label>
      <input
        type="text"
        name="CarePlan"
        defaultValue="Regular dental care to prevent infective endocarditis, echocardiograms to monitor valve function"
      />
      <br />
      <label htmlFor="Accurex">Accurex: </label>
      <input
        type="text"
        name="Accurex"
        defaultValue="Monitor for heart failure symptoms, manage anticoagulation if atrial fibrillation occurs"
      />
      <br />
    </fieldset>
    <br />
    <fieldset>
      <legend>Long QT Syndrome</legend>
      <label htmlFor="ConditionID">ConditionID: </label>
      <input type="text" name="ConditionID" defaultValue="C13" />
      <br />
      <label htmlFor="ConditionName">ConditionName: </label>
      <input type="text" name="ConditionName" defaultValue="Long QT Syndrome" />
      <br />
      <label htmlFor="ChiefComplaint">ChiefComplaint: </label>
      <input
        type="text"
        name="ChiefComplaint"
        defaultValue="Fainting, seizures, sudden cardiac death in severe cases."
      />
      <br />
      <label htmlFor="SocialHistory">SocialHistory: </label>
      <input
        type="text"
        name="SocialHistory"
        defaultValue="Can be congenital or acquired, often due to genetic mutations or medications."
      />
      <br />
      <label htmlFor="SystemsSurvey">SystemsSurvey: </label>
      <input
        type="text"
        name="SystemsSurvey"
        defaultValue="Abnormality in the hearts electrical recharging system."
      />
      <br />
      <label htmlFor="Vitals">Vitals: </label>
      <input
        type="text"
        name="Vitals"
        defaultValue="BP 120/80 mmHg, HR 72 bpm"
      />
      <br />
      <label htmlFor="PhysicalExam">PhysicalExam: </label>
      <input
        type="text"
        name="PhysicalExam"
        defaultValue="Normal physical exam; diagnosis primarily by ECG."
      />
      <br />
      <label htmlFor="Impression">Impression: </label>
      <input type="text" name="Impression" defaultValue="Long QT Syndrome" />
      <br />
      <label htmlFor="DifferentialDiagnosis">DifferentialDiagnosis: </label>
      <input
        type="text"
        name="DifferentialDiagnosis"
        defaultValue="Electrolyte imbalances, bradycardia"
      />
      <br />
      <label htmlFor="Allergies">Allergies: </label>
      <input type="text" name="Allergies" defaultValue="None" />
      <br />
      <label htmlFor="Pregnancy">Pregnancy: </label>
      <input type="text" name="Pregnancy" defaultValue="denies" />
      <br />
      <label htmlFor="Treatment">Treatment: </label>
      <input
        type="text"
        name="Treatment"
        defaultValue="Beta-blockers, avoidance of QT-prolonging drugs, possible implantable defibrillator"
      />
      <br />
      <label htmlFor="CarePlan">CarePlan: </label>
      <input
        type="text"
        name="CarePlan"
        defaultValue="Regular ECG monitoring, genetic testing for family members"
      />
      <br />
      <label htmlFor="Accurex">Accurex: </label>
      <input
        type="text"
        name="Accurex"
        defaultValue="Educate on avoiding medications that prolong the QT interval, recognise symptoms of arrhythmias"
      />
      <br />
    </fieldset>
    <br />
    <fieldset>
      <legend>Cardiogenic Shock</legend>
      <label htmlFor="ConditionID">ConditionID: </label>
      <input type="text" name="ConditionID" defaultValue="C14" />
      <br />
      <label htmlFor="ConditionName">ConditionName: </label>
      <input
        type="text"
        name="ConditionName"
        defaultValue="Cardiogenic Shock"
      />
      <br />
      <label htmlFor="ChiefComplaint">ChiefComplaint: </label>
      <input
        type="text"
        name="ChiefComplaint"
        defaultValue="Severe hypotension, weak pulse, rapid breathing, cold and clammy skin."
      />
      <br />
      <label htmlFor="SocialHistory">SocialHistory: </label>
      <input
        type="text"
        name="SocialHistory"
        defaultValue="Most commonly caused by a severe heart attack."
      />
      <br />
      <label htmlFor="SystemsSurvey">SystemsSurvey: </label>
      <input
        type="text"
        name="SystemsSurvey"
        defaultValue="A condition where the heart suddenly cant pump enough blood to meet the bodys needs."
      />
      <br />
      <label htmlFor="Vitals">Vitals: </label>
      <input
        type="text"
        name="Vitals"
        defaultValue="BP 80/50 mmHg, HR 110 bpm"
      />
      <br />
      <label htmlFor="PhysicalExam">PhysicalExam: </label>
      <input
        type="text"
        name="PhysicalExam"
        defaultValue="Rapid heart rate, low blood pressure, signs of poor perfusion."
      />
      <br />
      <label htmlFor="Impression">Impression: </label>
      <input type="text" name="Impression" defaultValue="Cardiogenic Shock" />
      <br />
      <label htmlFor="DifferentialDiagnosis">DifferentialDiagnosis: </label>
      <input
        type="text"
        name="DifferentialDiagnosis"
        defaultValue="Septic shock, pulmonary embolism"
      />
      <br />
      <label htmlFor="Allergies">Allergies: </label>
      <input type="text" name="Allergies" defaultValue="None" />
      <br />
      <label htmlFor="Pregnancy">Pregnancy: </label>
      <input type="text" name="Pregnancy" defaultValue="denies" />
      <br />
      <label htmlFor="Treatment">Treatment: </label>
      <input
        type="text"
        name="Treatment"
        defaultValue="Inotropic support, mechanical circulatory support, treat underlying cause"
      />
      <br />
      <label htmlFor="CarePlan">CarePlan: </label>
      <input
        type="text"
        name="CarePlan"
        defaultValue="Intensive care monitoring, follow-up for heart function assessment"
      />
      <br />
      <label htmlFor="Accurex">Accurex: </label>
      <input
        type="text"
        name="Accurex"
        defaultValue="Assess for recovery and rehabilitation potential, consider long-term support if needed"
      />
      <br />
    </fieldset>
    <br />
    <fieldset>
      <legend>Pulmonary Hypertension</legend>
      <label htmlFor="ConditionID">ConditionID: </label>
      <input type="text" name="ConditionID" defaultValue="C15" />
      <br />
      <label htmlFor="ConditionName">ConditionName: </label>
      <input
        type="text"
        name="ConditionName"
        defaultValue="Pulmonary Hypertension"
      />
      <br />
      <label htmlFor="ChiefComplaint">ChiefComplaint: </label>
      <input
        type="text"
        name="ChiefComplaint"
        defaultValue="Shortness of breath, fatigue, chest pain, oedema."
      />
      <br />
      <label htmlFor="SocialHistory">SocialHistory: </label>
      <input
        type="text"
        name="SocialHistory"
        defaultValue="Can be idiopathic, hereditary, or associated with other diseases."
      />
      <br />
      <label htmlFor="SystemsSurvey">SystemsSurvey: </label>
      <input
        type="text"
        name="SystemsSurvey"
        defaultValue="High blood pressure in the arteries to the lungs, leading to right heart failure."
      />
      <br />
      <label htmlFor="Vitals">Vitals: </label>
      <input
        type="text"
        name="Vitals"
        defaultValue="BP 130/85 mmHg, HR 90 bpm"
      />
      <br />
      <label htmlFor="PhysicalExam">PhysicalExam: </label>
      <input
        type="text"
        name="PhysicalExam"
        defaultValue="Elevated jugular venous pressure, peripheral oedema, ascites in advanced cases."
      />
      <br />
      <label htmlFor="Impression">Impression: </label>
      <input
        type="text"
        name="Impression"
        defaultValue="Pulmonary Hypertension"
      />
      <br />
      <label htmlFor="DifferentialDiagnosis">DifferentialDiagnosis: </label>
      <input
        type="text"
        name="DifferentialDiagnosis"
        defaultValue="Chronic obstructive pulmonary disease (COPD), left heart disease"
      />
      <br />
      <label htmlFor="Allergies">Allergies: </label>
      <input type="text" name="Allergies" defaultValue="None" />
      <br />
      <label htmlFor="Pregnancy">Pregnancy: </label>
      <input type="text" name="Pregnancy" defaultValue="denies" />
      <br />
      <label htmlFor="Treatment">Treatment: </label>
      <input
        type="text"
        name="Treatment"
        defaultValue="Vasodilators, endothelin receptor antagonists, oxygen therapy"
      />
      <br />
      <label htmlFor="CarePlan">CarePlan: </label>
      <input
        type="text"
        name="CarePlan"
        defaultValue="Regular echocardiograms, right heart catheterisation as needed"
      />
      <br />
      <label htmlFor="Accurex">Accurex: </label>
      <input
        type="text"
        name="Accurex"
        defaultValue="Monitor for progression, manage complications such as right heart failure"
      />
      <br />
    </fieldset>
    <br />
    <fieldset>
      <legend>Ventricular Septal Defect</legend>
      <label htmlFor="ConditionID">ConditionID: </label>
      <input type="text" name="ConditionID" defaultValue="C16" />
      <br />
      <label htmlFor="ConditionName">ConditionName: </label>
      <input
        type="text"
        name="ConditionName"
        defaultValue="Ventricular Septal Defect"
      />
      <br />
      <label htmlFor="ChiefComplaint">ChiefComplaint: </label>
      <input
        type="text"
        name="ChiefComplaint"
        defaultValue="Heart murmur, shortness of breath, especially during feeding in infants."
      />
      <br />
      <label htmlFor="SocialHistory">SocialHistory: </label>
      <input
        type="text"
        name="SocialHistory"
        defaultValue="Congenital heart defect present at birth."
      />
      <br />
      <label htmlFor="SystemsSurvey">SystemsSurvey: </label>
      <input
        type="text"
        name="SystemsSurvey"
        defaultValue="A hole in the hearts septum separating the two ventricles."
      />
      <br />
      <label htmlFor="Vitals">Vitals: </label>
      <input
        type="text"
        name="Vitals"
        defaultValue="BP 100/60 mmHg, HR 120 bpm in infants"
      />
      <br />
      <label htmlFor="PhysicalExam">PhysicalExam: </label>
      <input
        type="text"
        name="PhysicalExam"
        defaultValue="Loud heart murmur best heard at the left lower sternal border."
      />
      <br />
      <label htmlFor="Impression">Impression: </label>
      <input
        type="text"
        name="Impression"
        defaultValue="Ventricular Septal Defect"
      />
      <br />
      <label htmlFor="DifferentialDiagnosis">DifferentialDiagnosis: </label>
      <input
        type="text"
        name="DifferentialDiagnosis"
        defaultValue="Patent ductus arteriosus, atrial septal defect"
      />
      <br />
      <label htmlFor="Allergies">Allergies: </label>
      <input type="text" name="Allergies" defaultValue="None" />
      <br />
      <label htmlFor="Pregnancy">Pregnancy: </label>
      <input type="text" name="Pregnancy" defaultValue="denies" />
      <br />
      <label htmlFor="Treatment">Treatment: </label>
      <input
        type="text"
        name="Treatment"
        defaultValue="Observation for small defects, surgical repair for larger defects or those causing symptoms"
      />
      <br />
      <label htmlFor="CarePlan">CarePlan: </label>
      <input
        type="text"
        name="CarePlan"
        defaultValue="Regular follow-up with paediatric cardiologist, monitoring growth and development"
      />
      <br />
      <label htmlFor="Accurex">Accurex: </label>
      <input
        type="text"
        name="Accurex"
        defaultValue="Assess for signs of heart failure or pulmonary hypertension, educate parents on signs to watch for"
      />
      <br />
    </fieldset>
    <br />
    <fieldset>
      <legend>Atrial Septal Defect</legend>
      <label htmlFor="ConditionID">ConditionID: </label>
      <input type="text" name="ConditionID" defaultValue="C17" />
      <br />
      <label htmlFor="ConditionName">ConditionName: </label>
      <input
        type="text"
        name="ConditionName"
        defaultValue="Atrial Septal Defect"
      />
      <br />
      <label htmlFor="ChiefComplaint">ChiefComplaint: </label>
      <input
        type="text"
        name="ChiefComplaint"
        defaultValue="Often asymptomatic, possible exercise intolerance, palpitations."
      />
      <br />
      <label htmlFor="SocialHistory">SocialHistory: </label>
      <input
        type="text"
        name="SocialHistory"
        defaultValue="Congenital heart defect."
      />
      <br />
      <label htmlFor="SystemsSurvey">SystemsSurvey: </label>
      <input
        type="text"
        name="SystemsSurvey"
        defaultValue="A hole in the hearts septum separating the two atria."
      />
      <br />
      <label htmlFor="Vitals">Vitals: </label>
      <input
        type="text"
        name="Vitals"
        defaultValue="BP 110/70 mmHg, HR 80 bpm"
      />
      <br />
      <label htmlFor="PhysicalExam">PhysicalExam: </label>
      <input
        type="text"
        name="PhysicalExam"
        defaultValue="Soft systolic murmur, fixed split second heart sound."
      />
      <br />
      <label htmlFor="Impression">Impression: </label>
      <input
        type="text"
        name="Impression"
        defaultValue="Atrial Septal Defect"
      />
      <br />
      <label htmlFor="DifferentialDiagnosis">DifferentialDiagnosis: </label>
      <input
        type="text"
        name="DifferentialDiagnosis"
        defaultValue="Ventricular septal defect, patent foramen ovale"
      />
      <br />
      <label htmlFor="Allergies">Allergies: </label>
      <input type="text" name="Allergies" defaultValue="None" />
      <br />
      <label htmlFor="Pregnancy">Pregnancy: </label>
      <input type="text" name="Pregnancy" defaultValue="denies" />
      <br />
      <label htmlFor="Treatment">Treatment: </label>
      <input
        type="text"
        name="Treatment"
        defaultValue="Closure during cardiac catheterisation or surgery for larger defects"
      />
      <br />
      <label htmlFor="CarePlan">CarePlan: </label>
      <input
        type="text"
        name="CarePlan"
        defaultValue="Regular cardiac evaluations, monitoring for arrhythmias"
      />
      <br />
      <label htmlFor="Accurex">Accurex: </label>
      <input
        type="text"
        name="Accurex"
        defaultValue="Evaluate need for closure based on size and symptoms, monitor for pulmonary hypertension"
      />
      <br />
    </fieldset>
    <br />
    <fieldset>
      <legend>Heart Block</legend>
      <label htmlFor="ConditionID">ConditionID: </label>
      <input type="text" name="ConditionID" defaultValue="C18" />
      <br />
      <label htmlFor="ConditionName">ConditionName: </label>
      <input type="text" name="ConditionName" defaultValue="Heart Block" />
      <br />
      <label htmlFor="ChiefComplaint">ChiefComplaint: </label>
      <input
        type="text"
        name="ChiefComplaint"
        defaultValue="Dizziness, fatigue, fainting."
      />
      <br />
      <label htmlFor="SocialHistory">SocialHistory: </label>
      <input
        type="text"
        name="SocialHistory"
        defaultValue="May result from congenital conditions, heart attack, or degeneration of electrical conduction system."
      />
      <br />
      <label htmlFor="SystemsSurvey">SystemsSurvey: </label>
      <input
        type="text"
        name="SystemsSurvey"
        defaultValue="Impaired electrical conduction in the heart, leading to slow or blocked heart beats."
      />
      <br />
      <label htmlFor="Vitals">Vitals: </label>
      <input
        type="text"
        name="Vitals"
        defaultValue="BP 110/70 mmHg, HR varies depending on degree of block"
      />
      <br />
      <label htmlFor="PhysicalExam">PhysicalExam: </label>
      <input
        type="text"
        name="PhysicalExam"
        defaultValue="Bradyarrhythmias, pauses in heart rhythm."
      />
      <br />
      <label htmlFor="Impression">Impression: </label>
      <input type="text" name="Impression" defaultValue="Heart Block" />
      <br />
      <label htmlFor="DifferentialDiagnosis">DifferentialDiagnosis: </label>
      <input
        type="text"
        name="DifferentialDiagnosis"
        defaultValue="Sinus node dysfunction, atrial fibrillation with slow ventricular response"
      />
      <br />
      <label htmlFor="Allergies">Allergies: </label>
      <input type="text" name="Allergies" defaultValue="None" />
      <br />
      <label htmlFor="Pregnancy">Pregnancy: </label>
      <input type="text" name="Pregnancy" defaultValue="denies" />
      <br />
      <label htmlFor="Treatment">Treatment: </label>
      <input
        type="text"
        name="Treatment"
        defaultValue="Pacemaker for symptomatic bradycardia"
      />
      <br />
      <label htmlFor="CarePlan">CarePlan: </label>
      <input
        type="text"
        name="CarePlan"
        defaultValue="Regular monitoring of pacemaker function, avoid medications that may worsen bradycardia"
      />
      <br />
      <label htmlFor="Accurex">Accurex: </label>
      <input
        type="text"
        name="Accurex"
        defaultValue="Educate on symptoms of pacemaker malfunction, regular follow-up appointments"
      />
      <br />
    </fieldset>
    <br />
    <input type="submit" defaultValue="Submit" />
  </form>
    </div>
  );
}

export default CardiologyForm;
