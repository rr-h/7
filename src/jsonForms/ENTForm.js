import React from 'react';

function ENTForm() {
  return (
    <div>
  <title>ENT Form</title>
  <form action="submit_form_endpoint" method="post">
    <fieldset>
      <legend>Otitis Media</legend>
      <label htmlFor="ConditionID">ConditionID: </label>
      <input type="text" name="ConditionID" defaultValue="E1" />
      <br />
      <label htmlFor="ConditionName">ConditionName: </label>
      <input type="text" name="ConditionName" defaultValue="Otitis Media" />
      <br />
      <label htmlFor="ChiefComplaint">ChiefComplaint: </label>
      <input
        type="text"
        name="ChiefComplaint"
        defaultValue="Ear pain, fever, and hearing loss."
      />
      <br />
      <label htmlFor="SocialHistory">SocialHistory: </label>
      <input
        type="text"
        name="SocialHistory"
        defaultValue="Common in children, especially those who attend daycare."
      />
      <br />
      <label htmlFor="SystemsSurvey">SystemsSurvey: </label>
      <input
        type="text"
        name="SystemsSurvey"
        defaultValue="Recent upper respiratory infection."
      />
      <br />
      <label htmlFor="Vitals">Vitals: </label>
      <input
        type="text"
        name="Vitals"
        defaultValue="BP 120/80, HR 80, Temp 38°C"
      />
      <br />
      <label htmlFor="PhysicalExam">PhysicalExam: </label>
      <input
        type="text"
        name="PhysicalExam"
        defaultValue="Red, bulging tympanic membrane with decreased mobility."
      />
      <br />
      <label htmlFor="Impression">Impression: </label>
      <input type="text" name="Impression" defaultValue="Otitis Media" />
      <br />
      <label htmlFor="DifferentialDiagnosis">DifferentialDiagnosis: </label>
      <input
        type="text"
        name="DifferentialDiagnosis"
        defaultValue="Otitis externa, tympanic membrane perforation"
      />
      <br />
      <label htmlFor="Allergies">Allergies: </label>
      <input type="text" name="Allergies" defaultValue="None" />
      <br />
      <label htmlFor="Pregnancy">Pregnancy: </label>
      <input type="text" name="Pregnancy" defaultValue="Not applicable" />
      <br />
      <label htmlFor="Treatment">Treatment: </label>
      <input
        type="text"
        name="Treatment"
        defaultValue="Antibiotics if bacterial and severe, pain management"
      />
      <br />
      <label htmlFor="CarePlan">CarePlan: </label>
      <input
        type="text"
        name="CarePlan"
        defaultValue="Avoid smoke exposure, consider pneumococcal vaccine"
      />
      <br />
      <label htmlFor="Accurex">Accurex: </label>
      <input type="text" name="Accurex" defaultValue="N/A" />
      <br />
    </fieldset>
    <br />
    <fieldset>
      <legend>Rhinosinusitis</legend>
      <label htmlFor="ConditionID">ConditionID: </label>
      <input type="text" name="ConditionID" defaultValue="E2" />
      <br />
      <label htmlFor="ConditionName">ConditionName: </label>
      <input type="text" name="ConditionName" defaultValue="Rhinosinusitis" />
      <br />
      <label htmlFor="ChiefComplaint">ChiefComplaint: </label>
      <input
        type="text"
        name="ChiefComplaint"
        defaultValue="Nasal congestion, facial pain/pressure, reduced sense of smell."
      />
      <br />
      <label htmlFor="SocialHistory">SocialHistory: </label>
      <input
        type="text"
        name="SocialHistory"
        defaultValue="History of allergies or nasal polyps."
      />
      <br />
      <label htmlFor="SystemsSurvey">SystemsSurvey: </label>
      <input
        type="text"
        name="SystemsSurvey"
        defaultValue="Nasal obstruction and discharge."
      />
      <br />
      <label htmlFor="Vitals">Vitals: </label>
      <input
        type="text"
        name="Vitals"
        defaultValue="BP 120/80, HR 70, Temp 37.5°C"
      />
      <br />
      <label htmlFor="PhysicalExam">PhysicalExam: </label>
      <input
        type="text"
        name="PhysicalExam"
        defaultValue="Purulent nasal discharge, nasal mucosal oedema, tenderness over sinuses."
      />
      <br />
      <label htmlFor="Impression">Impression: </label>
      <input type="text" name="Impression" defaultValue="Rhinosinusitis" />
      <br />
      <label htmlFor="DifferentialDiagnosis">DifferentialDiagnosis: </label>
      <input
        type="text"
        name="DifferentialDiagnosis"
        defaultValue="Allergic rhinitis, nasal polyps"
      />
      <br />
      <label htmlFor="Allergies">Allergies: </label>
      <input type="text" name="Allergies" defaultValue="None" />
      <br />
      <label htmlFor="Pregnancy">Pregnancy: </label>
      <input type="text" name="Pregnancy" defaultValue="Not applicable" />
      <br />
      <label htmlFor="Treatment">Treatment: </label>
      <input
        type="text"
        name="Treatment"
        defaultValue="Nasal corticosteroids, saline irrigation, antibiotics if bacterial"
      />
      <br />
      <label htmlFor="CarePlan">CarePlan: </label>
      <input
        type="text"
        name="CarePlan"
        defaultValue="Humidifier use, hydration, avoid allergens"
      />
      <br />
      <label htmlFor="Accurex">Accurex: </label>
      <input type="text" name="Accurex" defaultValue="N/A" />
      <br />
    </fieldset>
    <br />
    <fieldset>
      <legend>Tonsillitis</legend>
      <label htmlFor="ConditionID">ConditionID: </label>
      <input type="text" name="ConditionID" defaultValue="E3" />
      <br />
      <label htmlFor="ConditionName">ConditionName: </label>
      <input type="text" name="ConditionName" defaultValue="Tonsillitis" />
      <br />
      <label htmlFor="ChiefComplaint">ChiefComplaint: </label>
      <input
        type="text"
        name="ChiefComplaint"
        defaultValue="Sore throat, difficulty swallowing, fever."
      />
      <br />
      <label htmlFor="SocialHistory">SocialHistory: </label>
      <input
        type="text"
        name="SocialHistory"
        defaultValue="Common in school-aged children."
      />
      <br />
      <label htmlFor="SystemsSurvey">SystemsSurvey: </label>
      <input
        type="text"
        name="SystemsSurvey"
        defaultValue="Exposure to viral or bacterial pathogens."
      />
      <br />
      <label htmlFor="Vitals">Vitals: </label>
      <input
        type="text"
        name="Vitals"
        defaultValue="BP 120/80, HR 90, Temp 38.2°C"
      />
      <br />
      <label htmlFor="PhysicalExam">PhysicalExam: </label>
      <input
        type="text"
        name="PhysicalExam"
        defaultValue="Swollen, erythematous tonsils with or without exudate."
      />
      <br />
      <label htmlFor="Impression">Impression: </label>
      <input type="text" name="Impression" defaultValue="Tonsillitis" />
      <br />
      <label htmlFor="DifferentialDiagnosis">DifferentialDiagnosis: </label>
      <input
        type="text"
        name="DifferentialDiagnosis"
        defaultValue="Pharyngitis, mononucleosis"
      />
      <br />
      <label htmlFor="Allergies">Allergies: </label>
      <input type="text" name="Allergies" defaultValue="None" />
      <br />
      <label htmlFor="Pregnancy">Pregnancy: </label>
      <input type="text" name="Pregnancy" defaultValue="Not applicable" />
      <br />
      <label htmlFor="Treatment">Treatment: </label>
      <input
        type="text"
        name="Treatment"
        defaultValue="Pain relievers, antibiotics for bacterial infection"
      />
      <br />
      <label htmlFor="CarePlan">CarePlan: </label>
      <input
        type="text"
        name="CarePlan"
        defaultValue="Throat lozenges, warm saline gargles, rest"
      />
      <br />
      <label htmlFor="Accurex">Accurex: </label>
      <input type="text" name="Accurex" defaultValue="N/A" />
      <br />
    </fieldset>
    <br />
    <fieldset>
      <legend>Laryngitis</legend>
      <label htmlFor="ConditionID">ConditionID: </label>
      <input type="text" name="ConditionID" defaultValue="E4" />
      <br />
      <label htmlFor="ConditionName">ConditionName: </label>
      <input type="text" name="ConditionName" defaultValue="Laryngitis" />
      <br />
      <label htmlFor="ChiefComplaint">ChiefComplaint: </label>
      <input
        type="text"
        name="ChiefComplaint"
        defaultValue="Hoarseness, voice loss, throat discomfort."
      />
      <br />
      <label htmlFor="SocialHistory">SocialHistory: </label>
      <input
        type="text"
        name="SocialHistory"
        defaultValue="Overuse of voice, exposure to irritants."
      />
      <br />
      <label htmlFor="SystemsSurvey">SystemsSurvey: </label>
      <input
        type="text"
        name="SystemsSurvey"
        defaultValue="Recent cough or cold."
      />
      <br />
      <label htmlFor="Vitals">Vitals: </label>
      <input
        type="text"
        name="Vitals"
        defaultValue="BP 120/80, HR 70, Temp 37°C"
      />
      <br />
      <label htmlFor="PhysicalExam">PhysicalExam: </label>
      <input
        type="text"
        name="PhysicalExam"
        defaultValue="Vocal cord swelling and redness seen on laryngoscopy."
      />
      <br />
      <label htmlFor="Impression">Impression: </label>
      <input type="text" name="Impression" defaultValue="Laryngitis" />
      <br />
      <label htmlFor="DifferentialDiagnosis">DifferentialDiagnosis: </label>
      <input
        type="text"
        name="DifferentialDiagnosis"
        defaultValue="Vocal cord nodules, GERD-induced laryngitis"
      />
      <br />
      <label htmlFor="Allergies">Allergies: </label>
      <input type="text" name="Allergies" defaultValue="None" />
      <br />
      <label htmlFor="Pregnancy">Pregnancy: </label>
      <input type="text" name="Pregnancy" defaultValue="Not applicable" />
      <br />
      <label htmlFor="Treatment">Treatment: </label>
      <input
        type="text"
        name="Treatment"
        defaultValue="Voice rest, humidified air, hydration"
      />
      <br />
      <label htmlFor="CarePlan">CarePlan: </label>
      <input
        type="text"
        name="CarePlan"
        defaultValue="Avoid shouting or whispering, steam inhalation"
      />
      <br />
      <label htmlFor="Accurex">Accurex: </label>
      <input type="text" name="Accurex" defaultValue="N/A" />
      <br />
    </fieldset>
    <br />
    <fieldset>
      <legend>Epistaxis</legend>
      <label htmlFor="ConditionID">ConditionID: </label>
      <input type="text" name="ConditionID" defaultValue="E5" />
      <br />
      <label htmlFor="ConditionName">ConditionName: </label>
      <input type="text" name="ConditionName" defaultValue="Epistaxis" />
      <br />
      <label htmlFor="ChiefComplaint">ChiefComplaint: </label>
      <input
        type="text"
        name="ChiefComplaint"
        defaultValue="Bleeding from one or both nostrils."
      />
      <br />
      <label htmlFor="SocialHistory">SocialHistory: </label>
      <input
        type="text"
        name="SocialHistory"
        defaultValue="Dry air exposure, nasal trauma."
      />
      <br />
      <label htmlFor="SystemsSurvey">SystemsSurvey: </label>
      <input
        type="text"
        name="SystemsSurvey"
        defaultValue="Anterior nasal septum bleeding most common."
      />
      <br />
      <label htmlFor="Vitals">Vitals: </label>
      <input
        type="text"
        name="Vitals"
        defaultValue="BP 120/80, HR 70, Temp 37°C"
      />
      <br />
      <label htmlFor="PhysicalExam">PhysicalExam: </label>
      <input
        type="text"
        name="PhysicalExam"
        defaultValue="Active bleeding or clot in the nasal cavity, usually anterior."
      />
      <br />
      <label htmlFor="Impression">Impression: </label>
      <input type="text" name="Impression" defaultValue="Epistaxis" />
      <br />
      <label htmlFor="DifferentialDiagnosis">DifferentialDiagnosis: </label>
      <input
        type="text"
        name="DifferentialDiagnosis"
        defaultValue="Hypertension, coagulopathies"
      />
      <br />
      <label htmlFor="Allergies">Allergies: </label>
      <input type="text" name="Allergies" defaultValue="None" />
      <br />
      <label htmlFor="Pregnancy">Pregnancy: </label>
      <input type="text" name="Pregnancy" defaultValue="Not applicable" />
      <br />
      <label htmlFor="Treatment">Treatment: </label>
      <input
        type="text"
        name="Treatment"
        defaultValue="Nasal pressure, topical vasoconstrictors, cauterisation if recurrent"
      />
      <br />
      <label htmlFor="CarePlan">CarePlan: </label>
      <input
        type="text"
        name="CarePlan"
        defaultValue="Keep nasal passages moist, avoid picking or blowing nose hard"
      />
      <br />
      <label htmlFor="Accurex">Accurex: </label>
      <input type="text" name="Accurex" defaultValue="N/A" />
      <br />
    </fieldset>
    <br />
    <fieldset>
      <legend>Menieres Disease</legend>
      <label htmlFor="ConditionID">ConditionID: </label>
      <input type="text" name="ConditionID" defaultValue="E6" />
      <br />
      <label htmlFor="ConditionName">ConditionName: </label>
      <input type="text" name="ConditionName" defaultValue="Menieres Disease" />
      <br />
      <label htmlFor="ChiefComplaint">ChiefComplaint: </label>
      <input
        type="text"
        name="ChiefComplaint"
        defaultValue="Vertigo, hearing loss, tinnitus, and a feeling of fullness in one ear."
      />
      <br />
      <label htmlFor="SocialHistory">SocialHistory: </label>
      <input
        type="text"
        name="SocialHistory"
        defaultValue="Idiopathic, but potential links to fluid balance."
      />
      <br />
      <label htmlFor="SystemsSurvey">SystemsSurvey: </label>
      <input
        type="text"
        name="SystemsSurvey"
        defaultValue="Episodic, can last for hours."
      />
      <br />
      <label htmlFor="Vitals">Vitals: </label>
      <input
        type="text"
        name="Vitals"
        defaultValue="BP 120/80, HR 70, Temp 37°C"
      />
      <br />
      <label htmlFor="PhysicalExam">PhysicalExam: </label>
      <input
        type="text"
        name="PhysicalExam"
        defaultValue="Normal ear exam between episodes; audiometry shows low to mid-frequency hearing loss."
      />
      <br />
      <label htmlFor="Impression">Impression: </label>
      <input type="text" name="Impression" defaultValue="Menieres Disease" />
      <br />
      <label htmlFor="DifferentialDiagnosis">DifferentialDiagnosis: </label>
      <input
        type="text"
        name="DifferentialDiagnosis"
        defaultValue="Vestibular neuritis, BPPV"
      />
      <br />
      <label htmlFor="Allergies">Allergies: </label>
      <input type="text" name="Allergies" defaultValue="None" />
      <br />
      <label htmlFor="Pregnancy">Pregnancy: </label>
      <input type="text" name="Pregnancy" defaultValue="Not applicable" />
      <br />
      <label htmlFor="Treatment">Treatment: </label>
      <input
        type="text"
        name="Treatment"
        defaultValue="Low sodium diet, diuretics, vestibular rehabilitation"
      />
      <br />
      <label htmlFor="CarePlan">CarePlan: </label>
      <input
        type="text"
        name="CarePlan"
        defaultValue="Avoid caffeine and alcohol, manage stress"
      />
      <br />
      <label htmlFor="Accurex">Accurex: </label>
      <input type="text" name="Accurex" defaultValue="N/A" />
      <br />
    </fieldset>
    <br />
    <fieldset>
      <legend>Sleep Apnea</legend>
      <label htmlFor="ConditionID">ConditionID: </label>
      <input type="text" name="ConditionID" defaultValue="E7" />
      <br />
      <label htmlFor="ConditionName">ConditionName: </label>
      <input type="text" name="ConditionName" defaultValue="Sleep Apnea" />
      <br />
      <label htmlFor="ChiefComplaint">ChiefComplaint: </label>
      <input
        type="text"
        name="ChiefComplaint"
        defaultValue="Loud snoring, daytime sleepiness, observed pauses in breathing during sleep."
      />
      <br />
      <label htmlFor="SocialHistory">SocialHistory: </label>
      <input
        type="text"
        name="SocialHistory"
        defaultValue="Obesity, male gender, family history."
      />
      <br />
      <label htmlFor="SystemsSurvey">SystemsSurvey: </label>
      <input
        type="text"
        name="SystemsSurvey"
        defaultValue="Fatigue, morning headaches."
      />
      <br />
      <label htmlFor="Vitals">Vitals: </label>
      <input
        type="text"
        name="Vitals"
        defaultValue="BP 130/85, HR 72, Temp 37°C"
      />
      <br />
      <label htmlFor="PhysicalExam">PhysicalExam: </label>
      <input
        type="text"
        name="PhysicalExam"
        defaultValue="Enlarged tonsils, narrow airway; obesity may be present."
      />
      <br />
      <label htmlFor="Impression">Impression: </label>
      <input type="text" name="Impression" defaultValue="Sleep Apnea" />
      <br />
      <label htmlFor="DifferentialDiagnosis">DifferentialDiagnosis: </label>
      <input
        type="text"
        name="DifferentialDiagnosis"
        defaultValue="Insomnia, narcolepsy"
      />
      <br />
      <label htmlFor="Allergies">Allergies: </label>
      <input type="text" name="Allergies" defaultValue="None" />
      <br />
      <label htmlFor="Pregnancy">Pregnancy: </label>
      <input type="text" name="Pregnancy" defaultValue="Not applicable" />
      <br />
      <label htmlFor="Treatment">Treatment: </label>
      <input
        type="text"
        name="Treatment"
        defaultValue="CPAP therapy, weight loss, possibly surgery"
      />
      <br />
      <label htmlFor="CarePlan">CarePlan: </label>
      <input
        type="text"
        name="CarePlan"
        defaultValue="Regular follow-up, sleep hygiene"
      />
      <br />
      <label htmlFor="Accurex">Accurex: </label>
      <input type="text" name="Accurex" defaultValue="N/A" />
      <br />
    </fieldset>
    <br />
    <fieldset>
      <legend>Vocal Cord Nodules</legend>
      <label htmlFor="ConditionID">ConditionID: </label>
      <input type="text" name="ConditionID" defaultValue="E8" />
      <br />
      <label htmlFor="ConditionName">ConditionName: </label>
      <input
        type="text"
        name="ConditionName"
        defaultValue="Vocal Cord Nodules"
      />
      <br />
      <label htmlFor="ChiefComplaint">ChiefComplaint: </label>
      <input
        type="text"
        name="ChiefComplaint"
        defaultValue="Hoarseness, voice strain, breathiness."
      />
      <br />
      <label htmlFor="SocialHistory">SocialHistory: </label>
      <input
        type="text"
        name="SocialHistory"
        defaultValue="Singers, teachers, and other heavy voice users."
      />
      <br />
      <label htmlFor="SystemsSurvey">SystemsSurvey: </label>
      <input
        type="text"
        name="SystemsSurvey"
        defaultValue="Chronic voice misuse or overuse."
      />
      <br />
      <label htmlFor="Vitals">Vitals: </label>
      <input
        type="text"
        name="Vitals"
        defaultValue="BP 120/80, HR 70, Temp 37°C"
      />
      <br />
      <label htmlFor="PhysicalExam">PhysicalExam: </label>
      <input
        type="text"
        name="PhysicalExam"
        defaultValue="Bilateral nodules on the vocal cords seen during laryngoscopy."
      />
      <br />
      <label htmlFor="Impression">Impression: </label>
      <input type="text" name="Impression" defaultValue="Vocal Cord Nodules" />
      <br />
      <label htmlFor="DifferentialDiagnosis">DifferentialDiagnosis: </label>
      <input
        type="text"
        name="DifferentialDiagnosis"
        defaultValue="Vocal cord polyps, laryngitis"
      />
      <br />
      <label htmlFor="Allergies">Allergies: </label>
      <input type="text" name="Allergies" defaultValue="None" />
      <br />
      <label htmlFor="Pregnancy">Pregnancy: </label>
      <input type="text" name="Pregnancy" defaultValue="Not applicable" />
      <br />
      <label htmlFor="Treatment">Treatment: </label>
      <input
        type="text"
        name="Treatment"
        defaultValue="Voice therapy, vocal rest"
      />
      <br />
      <label htmlFor="CarePlan">CarePlan: </label>
      <input
        type="text"
        name="CarePlan"
        defaultValue="Avoid yelling or whispering, proper vocal technique"
      />
      <br />
      <label htmlFor="Accurex">Accurex: </label>
      <input type="text" name="Accurex" defaultValue="N/A" />
      <br />
    </fieldset>
    <br />
    <fieldset>
      <legend>Nasal Polyps</legend>
      <label htmlFor="ConditionID">ConditionID: </label>
      <input type="text" name="ConditionID" defaultValue="E9" />
      <br />
      <label htmlFor="ConditionName">ConditionName: </label>
      <input type="text" name="ConditionName" defaultValue="Nasal Polyps" />
      <br />
      <label htmlFor="ChiefComplaint">ChiefComplaint: </label>
      <input
        type="text"
        name="ChiefComplaint"
        defaultValue="Nasal congestion, reduced sense of smell, postnasal drip."
      />
      <br />
      <label htmlFor="SocialHistory">SocialHistory: </label>
      <input
        type="text"
        name="SocialHistory"
        defaultValue="Associated with chronic rhino-sinusitis, asthma."
      />
      <br />
      <label htmlFor="SystemsSurvey">SystemsSurvey: </label>
      <input
        type="text"
        name="SystemsSurvey"
        defaultValue="Frequent nasal obstruction."
      />
      <br />
      <label htmlFor="Vitals">Vitals: </label>
      <input
        type="text"
        name="Vitals"
        defaultValue="BP 120/80, HR 70, Temp 37°C"
      />
      <br />
      <label htmlFor="PhysicalExam">PhysicalExam: </label>
      <input
        type="text"
        name="PhysicalExam"
        defaultValue="Pale, oedematous masses within the nasal cavity seen on endoscopy."
      />
      <br />
      <label htmlFor="Impression">Impression: </label>
      <input type="text" name="Impression" defaultValue="Nasal Polyps" />
      <br />
      <label htmlFor="DifferentialDiagnosis">DifferentialDiagnosis: </label>
      <input
        type="text"
        name="DifferentialDiagnosis"
        defaultValue="Chronic rhino-sinusitis without polyps, turbinate hypertrophy"
      />
      <br />
      <label htmlFor="Allergies">Allergies: </label>
      <input type="text" name="Allergies" defaultValue="None" />
      <br />
      <label htmlFor="Pregnancy">Pregnancy: </label>
      <input type="text" name="Pregnancy" defaultValue="Not applicable" />
      <br />
      <label htmlFor="Treatment">Treatment: </label>
      <input
        type="text"
        name="Treatment"
        defaultValue="Corticosteroid nasal sprays, oral corticosteroids, surgery if severe"
      />
      <br />
      <label htmlFor="CarePlan">CarePlan: </label>
      <input
        type="text"
        name="CarePlan"
        defaultValue="Manage allergies and asthma, saline nasal rinses"
      />
      <br />
      <label htmlFor="Accurex">Accurex: </label>
      <input type="text" name="Accurex" defaultValue="N/A" />
      <br />
    </fieldset>
    <br />
    <fieldset>
      <legend>Acoustic Neuroma</legend>
      <label htmlFor="ConditionID">ConditionID: </label>
      <input type="text" name="ConditionID" defaultValue="E10" />
      <br />
      <label htmlFor="ConditionName">ConditionName: </label>
      <input type="text" name="ConditionName" defaultValue="Acoustic Neuroma" />
      <br />
      <label htmlFor="ChiefComplaint">ChiefComplaint: </label>
      <input
        type="text"
        name="ChiefComplaint"
        defaultValue="Hearing loss, tinnitus, and balance issues on one side."
      />
      <br />
      <label htmlFor="SocialHistory">SocialHistory: </label>
      <input
        type="text"
        name="SocialHistory"
        defaultValue="Unknown; rare links to neurofibromatosis type 2."
      />
      <br />
      <label htmlFor="SystemsSurvey">SystemsSurvey: </label>
      <input
        type="text"
        name="SystemsSurvey"
        defaultValue="Progressive unilateral sensorineural hearing loss."
      />
      <br />
      <label htmlFor="Vitals">Vitals: </label>
      <input
        type="text"
        name="Vitals"
        defaultValue="BP 120/80, HR 70, Temp 37°C"
      />
      <br />
      <label htmlFor="PhysicalExam">PhysicalExam: </label>
      <input
        type="text"
        name="PhysicalExam"
        defaultValue="Unilateral hearing loss; MRI confirms intracranial tumour on the vestibulocochlear nerve."
      />
      <br />
      <label htmlFor="Impression">Impression: </label>
      <input type="text" name="Impression" defaultValue="Acoustic Neuroma" />
      <br />
      <label htmlFor="DifferentialDiagnosis">DifferentialDiagnosis: </label>
      <input
        type="text"
        name="DifferentialDiagnosis"
        defaultValue="Menieres disease, vestibular neuritis"
      />
      <br />
      <label htmlFor="Allergies">Allergies: </label>
      <input type="text" name="Allergies" defaultValue="None" />
      <br />
      <label htmlFor="Pregnancy">Pregnancy: </label>
      <input type="text" name="Pregnancy" defaultValue="Not applicable" />
      <br />
      <label htmlFor="Treatment">Treatment: </label>
      <input
        type="text"
        name="Treatment"
        defaultValue="Monitoring, stereotactic radio-surgery, surgical removal"
      />
      <br />
      <label htmlFor="CarePlan">CarePlan: </label>
      <input
        type="text"
        name="CarePlan"
        defaultValue="Hearing aids if needed, balance therapy"
      />
      <br />
      <label htmlFor="Accurex">Accurex: </label>
      <input type="text" name="Accurex" defaultValue="N/A" />
      <br />
    </fieldset>
    <br />
    <fieldset>
      <legend>Otitis Externa</legend>
      <label htmlFor="ConditionID">ConditionID: </label>
      <input type="text" name="ConditionID" defaultValue="E11" />
      <br />
      <label htmlFor="ConditionName">ConditionName: </label>
      <input type="text" name="ConditionName" defaultValue="Otitis Externa" />
      <br />
      <label htmlFor="ChiefComplaint">ChiefComplaint: </label>
      <input
        type="text"
        name="ChiefComplaint"
        defaultValue="Ear pain, discharge, itching, and reduced hearing."
      />
      <br />
      <label htmlFor="SocialHistory">SocialHistory: </label>
      <input
        type="text"
        name="SocialHistory"
        defaultValue="Swimming, use of in-ear devices."
      />
      <br />
      <label htmlFor="SystemsSurvey">SystemsSurvey: </label>
      <input
        type="text"
        name="SystemsSurvey"
        defaultValue="External ear canal infection."
      />
      <br />
      <label htmlFor="Vitals">Vitals: </label>
      <input
        type="text"
        name="Vitals"
        defaultValue="BP 120/80, HR 70, Temp 37°C"
      />
      <br />
      <label htmlFor="PhysicalExam">PhysicalExam: </label>
      <input
        type="text"
        name="PhysicalExam"
        defaultValue="Ear canal erythema, oedema, and otorrhea; tragal tenderness."
      />
      <br />
      <label htmlFor="Impression">Impression: </label>
      <input type="text" name="Impression" defaultValue="Otitis Externa" />
      <br />
      <label htmlFor="DifferentialDiagnosis">DifferentialDiagnosis: </label>
      <input
        type="text"
        name="DifferentialDiagnosis"
        defaultValue="Otitis media, foreign body"
      />
      <br />
      <label htmlFor="Allergies">Allergies: </label>
      <input type="text" name="Allergies" defaultValue="None" />
      <br />
      <label htmlFor="Pregnancy">Pregnancy: </label>
      <input type="text" name="Pregnancy" defaultValue="Not applicable" />
      <br />
      <label htmlFor="Treatment">Treatment: </label>
      <input
        type="text"
        name="Treatment"
        defaultValue="Topical antibiotics, analgesics, ear drops"
      />
      <br />
      <label htmlFor="CarePlan">CarePlan: </label>
      <input
        type="text"
        name="CarePlan"
        defaultValue="Keep ear dry, avoid inserting objects"
      />
      <br />
      <label htmlFor="Accurex">Accurex: </label>
      <input type="text" name="Accurex" defaultValue="N/A" />
      <br />
    </fieldset>
    <br />
    <fieldset>
      <legend>Allergic Rhinitis</legend>
      <label htmlFor="ConditionID">ConditionID: </label>
      <input type="text" name="ConditionID" defaultValue="E12" />
      <br />
      <label htmlFor="ConditionName">ConditionName: </label>
      <input
        type="text"
        name="ConditionName"
        defaultValue="Allergic Rhinitis"
      />
      <br />
      <label htmlFor="ChiefComplaint">ChiefComplaint: </label>
      <input
        type="text"
        name="ChiefComplaint"
        defaultValue="Sneezing, nasal itching, congestion, and rhinorrhea."
      />
      <br />
      <label htmlFor="SocialHistory">SocialHistory: </label>
      <input
        type="text"
        name="SocialHistory"
        defaultValue="Exposure to allergens like pollen, dust mites."
      />
      <br />
      <label htmlFor="SystemsSurvey">SystemsSurvey: </label>
      <input
        type="text"
        name="SystemsSurvey"
        defaultValue="Seasonal or perennial symptoms."
      />
      <br />
      <label htmlFor="Vitals">Vitals: </label>
      <input
        type="text"
        name="Vitals"
        defaultValue="BP 120/80, HR 70, Temp 37°C"
      />
      <br />
      <label htmlFor="PhysicalExam">PhysicalExam: </label>
      <input
        type="text"
        name="PhysicalExam"
        defaultValue="Pale, boggy nasal mucosa; nasal congestion."
      />
      <br />
      <label htmlFor="Impression">Impression: </label>
      <input type="text" name="Impression" defaultValue="Allergic Rhinitis" />
      <br />
      <label htmlFor="DifferentialDiagnosis">DifferentialDiagnosis: </label>
      <input
        type="text"
        name="DifferentialDiagnosis"
        defaultValue="Non-allergic rhinitis, sinusitis"
      />
      <br />
      <label htmlFor="Allergies">Allergies: </label>
      <input type="text" name="Allergies" defaultValue="None" />
      <br />
      <label htmlFor="Pregnancy">Pregnancy: </label>
      <input type="text" name="Pregnancy" defaultValue="Applicable" />
      <br />
      <label htmlFor="Treatment">Treatment: </label>
      <input
        type="text"
        name="Treatment"
        defaultValue="Antihistamines, nasal corticosteroids, allergen avoidance"
      />
      <br />
      <label htmlFor="CarePlan">CarePlan: </label>
      <input
        type="text"
        name="CarePlan"
        defaultValue="Environmental control measures, consider allergy testing"
      />
      <br />
      <label htmlFor="Accurex">Accurex: </label>
      <input type="text" name="Accurex" defaultValue="N/A" />
      <br />
    </fieldset>
    <br />
    <fieldset>
      <legend>Pharyngitis</legend>
      <label htmlFor="ConditionID">ConditionID: </label>
      <input type="text" name="ConditionID" defaultValue="E13" />
      <br />
      <label htmlFor="ConditionName">ConditionName: </label>
      <input type="text" name="ConditionName" defaultValue="Pharyngitis" />
      <br />
      <label htmlFor="ChiefComplaint">ChiefComplaint: </label>
      <input
        type="text"
        name="ChiefComplaint"
        defaultValue="Sore throat, difficulty swallowing, possible fever."
      />
      <br />
      <label htmlFor="SocialHistory">SocialHistory: </label>
      <input
        type="text"
        name="SocialHistory"
        defaultValue="Viral or bacterial infection."
      />
      <br />
      <label htmlFor="SystemsSurvey">SystemsSurvey: </label>
      <input
        type="text"
        name="SystemsSurvey"
        defaultValue="Common in colder months."
      />
      <br />
      <label htmlFor="Vitals">Vitals: </label>
      <input
        type="text"
        name="Vitals"
        defaultValue="BP 120/80, HR 80, Temp 37.5°C"
      />
      <br />
      <label htmlFor="PhysicalExam">PhysicalExam: </label>
      <input
        type="text"
        name="PhysicalExam"
        defaultValue="Red, swollen pharynx; may have tonsillar exudate."
      />
      <br />
      <label htmlFor="Impression">Impression: </label>
      <input type="text" name="Impression" defaultValue="Pharyngitis" />
      <br />
      <label htmlFor="DifferentialDiagnosis">DifferentialDiagnosis: </label>
      <input
        type="text"
        name="DifferentialDiagnosis"
        defaultValue="Tonsillitis, mononucleosis"
      />
      <br />
      <label htmlFor="Allergies">Allergies: </label>
      <input type="text" name="Allergies" defaultValue="None" />
      <br />
      <label htmlFor="Pregnancy">Pregnancy: </label>
      <input type="text" name="Pregnancy" defaultValue="Not applicable" />
      <br />
      <label htmlFor="Treatment">Treatment: </label>
      <input
        type="text"
        name="Treatment"
        defaultValue="Analgesics, throat lozenges, antibiotics if bacterial"
      />
      <br />
      <label htmlFor="CarePlan">CarePlan: </label>
      <input
        type="text"
        name="CarePlan"
        defaultValue="Warm saline gargles, stay hydrated"
      />
      <br />
      <label htmlFor="Accurex">Accurex: </label>
      <input type="text" name="Accurex" defaultValue="N/A" />
      <br />
    </fieldset>
    <br />
    <fieldset>
      <legend>Sinonasal Polyps</legend>
      <label htmlFor="ConditionID">ConditionID: </label>
      <input type="text" name="ConditionID" defaultValue="E14" />
      <br />
      <label htmlFor="ConditionName">ConditionName: </label>
      <input type="text" name="ConditionName" defaultValue="Sinonasal Polyps" />
      <br />
      <label htmlFor="ChiefComplaint">ChiefComplaint: </label>
      <input
        type="text"
        name="ChiefComplaint"
        defaultValue="Nasal blockage, reduced sense of smell, postnasal drip."
      />
      <br />
      <label htmlFor="SocialHistory">SocialHistory: </label>
      <input
        type="text"
        name="SocialHistory"
        defaultValue="Associated with chronic rhino-sinusitis."
      />
      <br />
      <label htmlFor="SystemsSurvey">SystemsSurvey: </label>
      <input
        type="text"
        name="SystemsSurvey"
        defaultValue="Presents with nasal congestion."
      />
      <br />
      <label htmlFor="Vitals">Vitals: </label>
      <input
        type="text"
        name="Vitals"
        defaultValue="BP 120/80, HR 70, Temp 37°C"
      />
      <br />
      <label htmlFor="PhysicalExam">PhysicalExam: </label>
      <input
        type="text"
        name="PhysicalExam"
        defaultValue="Visible polyps in nasal cavity or sinus openings."
      />
      <br />
      <label htmlFor="Impression">Impression: </label>
      <input type="text" name="Impression" defaultValue="Sinonasal Polyps" />
      <br />
      <label htmlFor="DifferentialDiagnosis">DifferentialDiagnosis: </label>
      <input
        type="text"
        name="DifferentialDiagnosis"
        defaultValue="Chronic rhino-sinusitis without polyps"
      />
      <br />
      <label htmlFor="Allergies">Allergies: </label>
      <input type="text" name="Allergies" defaultValue="None" />
      <br />
      <label htmlFor="Pregnancy">Pregnancy: </label>
      <input type="text" name="Pregnancy" defaultValue="Not applicable" />
      <br />
      <label htmlFor="Treatment">Treatment: </label>
      <input
        type="text"
        name="Treatment"
        defaultValue="Corticosteroids, endoscopic sinus surgery for severe cases"
      />
      <br />
      <label htmlFor="CarePlan">CarePlan: </label>
      <input
        type="text"
        name="CarePlan"
        defaultValue="Manage underlying allergies, sinus rinse"
      />
      <br />
      <label htmlFor="Accurex">Accurex: </label>
      <input type="text" name="Accurex" defaultValue="N/A" />
      <br />
    </fieldset>
    <br />
    <fieldset>
      <legend>Epiglottitis</legend>
      <label htmlFor="ConditionID">ConditionID: </label>
      <input type="text" name="ConditionID" defaultValue="E15" />
      <br />
      <label htmlFor="ConditionName">ConditionName: </label>
      <input type="text" name="ConditionName" defaultValue="Epiglottitis" />
      <br />
      <label htmlFor="ChiefComplaint">ChiefComplaint: </label>
      <input
        type="text"
        name="ChiefComplaint"
        defaultValue="Rapid onset sore throat, fever, difficulty breathing, drooling."
      />
      <br />
      <label htmlFor="SocialHistory">SocialHistory: </label>
      <input
        type="text"
        name="SocialHistory"
        defaultValue="Bacterial infection, typically Haemophilus influenzae."
      />
      <br />
      <label htmlFor="SystemsSurvey">SystemsSurvey: </label>
      <input
        type="text"
        name="SystemsSurvey"
        defaultValue="Medical emergency requiring immediate attention."
      />
      <br />
      <label htmlFor="Vitals">Vitals: </label>
      <input
        type="text"
        name="Vitals"
        defaultValue="BP 130/90, HR 110, Temp 39°C"
      />
      <br />
      <label htmlFor="PhysicalExam">PhysicalExam: </label>
      <input
        type="text"
        name="PhysicalExam"
        defaultValue="Cherry-red, swollen epiglottis visible on laryngoscopy."
      />
      <br />
      <label htmlFor="Impression">Impression: </label>
      <input type="text" name="Impression" defaultValue="Epiglottitis" />
      <br />
      <label htmlFor="DifferentialDiagnosis">DifferentialDiagnosis: </label>
      <input
        type="text"
        name="DifferentialDiagnosis"
        defaultValue="Bacterial tracheitis, foreign body aspiration"
      />
      <br />
      <label htmlFor="Allergies">Allergies: </label>
      <input type="text" name="Allergies" defaultValue="None" />
      <br />
      <label htmlFor="Pregnancy">Pregnancy: </label>
      <input type="text" name="Pregnancy" defaultValue="Not applicable" />
      <br />
      <label htmlFor="Treatment">Treatment: </label>
      <input
        type="text"
        name="Treatment"
        defaultValue="Airway management, IV antibiotics"
      />
      <br />
      <label htmlFor="CarePlan">CarePlan: </label>
      <input
        type="text"
        name="CarePlan"
        defaultValue="Urgent hospital admission, intubation if necessary"
      />
      <br />
      <label htmlFor="Accurex">Accurex: </label>
      <input type="text" name="Accurex" defaultValue="N/A" />
      <br />
    </fieldset>
    <br />
    <fieldset>
      <legend>Peritonsillar Abscess</legend>
      <label htmlFor="ConditionID">ConditionID: </label>
      <input type="text" name="ConditionID" defaultValue="E16" />
      <br />
      <label htmlFor="ConditionName">ConditionName: </label>
      <input
        type="text"
        name="ConditionName"
        defaultValue="Peritonsillar Abscess"
      />
      <br />
      <label htmlFor="ChiefComplaint">ChiefComplaint: </label>
      <input
        type="text"
        name="ChiefComplaint"
        defaultValue="Severe sore throat, fever, drooling, difficulty opening the mouth (trismus), and a muffled or “hot potato” voice."
      />
      <br />
      <label htmlFor="SocialHistory">SocialHistory: </label>
      <input
        type="text"
        name="SocialHistory"
        defaultValue="Most often occurs in teens and young adults, history of recurrent tonsillitis."
      />
      <br />
      <label htmlFor="SystemsSurvey">SystemsSurvey: </label>
      <input
        type="text"
        name="SystemsSurvey"
        defaultValue="A collection of pus forming near the tonsils, often as a complication of untreated or inadequately treated tonsillitis."
      />
      <br />
      <label htmlFor="Vitals">Vitals: </label>
      <input type="text" name="Vitals" defaultValue="Elevated temperature" />
      <br />
      <label htmlFor="PhysicalExam">PhysicalExam: </label>
      <input
        type="text"
        name="PhysicalExam"
        defaultValue="Swelling of the peritonsillar area, uvula deviation to the opposite side, tonsillar erythema and exudate."
      />
      <br />
      <label htmlFor="Impression">Impression: </label>
      <input
        type="text"
        name="Impression"
        defaultValue="Peritonsillar Abscess"
      />
      <br />
      <label htmlFor="DifferentialDiagnosis">DifferentialDiagnosis: </label>
      <input
        type="text"
        name="DifferentialDiagnosis"
        defaultValue="Tonsillitis, mononucleosis, parapharyngeal abscess"
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
        defaultValue="Needle aspiration or incision and drainage, antibiotics, pain management"
      />
      <br />
      <label htmlFor="CarePlan">CarePlan: </label>
      <input
        type="text"
        name="CarePlan"
        defaultValue="Ensure adequate hydration, follow-up to assess for resolution or the need for tonsillectomy"
      />
      <br />
      <label htmlFor="Accurex">Accurex: </label>
      <input
        type="text"
        name="Accurex"
        defaultValue="Review signs of airway obstruction or spread of infection requiring immediate attention"
      />
      <br />
    </fieldset>
    <br />
    <input type="submit" defaultValue="Submit" />
  </form>
    </div>
  );
}

export default ENTForm;
