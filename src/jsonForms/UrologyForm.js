import React from 'react';

function UrologyForm() {
  return (
    <div>
  <title>Urology Form</title>
  <form action="submit_form_endpoint" method="post">
    <fieldset>
      <legend>Urinary Tract Infections</legend>
      <label htmlFor="ConditionID">ConditionID: </label>
      <input type="text" name="ConditionID" defaultValue="U1" />
      <br />
      <label htmlFor="ConditionName">ConditionName: </label>
      <input
        type="text"
        name="ConditionName"
        defaultValue="Urinary Tract Infections"
      />
      <br />
      <label htmlFor="ChiefComplaint">ChiefComplaint: </label>
      <input
        type="text"
        name="ChiefComplaint"
        defaultValue="Burning sensation during urination, frequent urination, urgency, cloudy urine."
      />
      <br />
      <label htmlFor="SocialHistory">SocialHistory: </label>
      <input
        type="text"
        name="SocialHistory"
        defaultValue="More common in women, history of previous UTIs."
      />
      <br />
      <label htmlFor="SystemsSurvey">SystemsSurvey: </label>
      <input
        type="text"
        name="SystemsSurvey"
        defaultValue="Infection in any part of the urinary system."
      />
      <br />
      <label htmlFor="Vitals">Vitals: </label>
      <input type="text" name="Vitals" defaultValue="Normal" />
      <br />
      <label htmlFor="PhysicalExam">PhysicalExam: </label>
      <input
        type="text"
        name="PhysicalExam"
        defaultValue="Suprapubic tenderness, no abdominal distension."
      />
      <br />
      <label htmlFor="Impression">Impression: </label>
      <input
        type="text"
        name="Impression"
        defaultValue="Urinary Tract Infections"
      />
      <br />
      <label htmlFor="DifferentialDiagnosis">DifferentialDiagnosis: </label>
      <input
        type="text"
        name="DifferentialDiagnosis"
        defaultValue="Interstitial cystitis, urethritis"
      />
      <br />
      <label htmlFor="Allergies">Allergies: </label>
      <input type="text" name="Allergies" defaultValue="None" />
      <br />
      <label htmlFor="Pregnancy">Pregnancy: </label>
      <input type="text" name="Pregnancy" defaultValue="denies" />
      <br />
      <label htmlFor="Treatment">Treatment: </label>
      <input type="text" name="Treatment" defaultValue="Antibiotics" />
      <br />
      <label htmlFor="CarePlan">CarePlan: </label>
      <input
        type="text"
        name="CarePlan"
        defaultValue="Increase fluid intake, cranberry supplements"
      />
      <br />
      <label htmlFor="Accurex">Accurex: </label>
      <input
        type="text"
        name="Accurex"
        defaultValue="Monitor for symptoms of pyelonephritis, follow up if symptoms persist"
      />
      <br />
    </fieldset>
    <br />
    <fieldset>
      <legend>Benign Prostatic Hyperplasia</legend>
      <label htmlFor="ConditionID">ConditionID: </label>
      <input type="text" name="ConditionID" defaultValue="U2" />
      <br />
      <label htmlFor="ConditionName">ConditionName: </label>
      <input
        type="text"
        name="ConditionName"
        defaultValue="Benign Prostatic Hyperplasia"
      />
      <br />
      <label htmlFor="ChiefComplaint">ChiefComplaint: </label>
      <input
        type="text"
        name="ChiefComplaint"
        defaultValue="Difficulty starting urination, weak stream, nocturia."
      />
      <br />
      <label htmlFor="SocialHistory">SocialHistory: </label>
      <input
        type="text"
        name="SocialHistory"
        defaultValue="Common in older men."
      />
      <br />
      <label htmlFor="SystemsSurvey">SystemsSurvey: </label>
      <input
        type="text"
        name="SystemsSurvey"
        defaultValue="Enlargement of the prostate gland causing urinary symptoms."
      />
      <br />
      <label htmlFor="Vitals">Vitals: </label>
      <input type="text" name="Vitals" defaultValue="Normal" />
      <br />
      <label htmlFor="PhysicalExam">PhysicalExam: </label>
      <input
        type="text"
        name="PhysicalExam"
        defaultValue="Enlarged, non-tender prostate on digital rectal exam."
      />
      <br />
      <label htmlFor="Impression">Impression: </label>
      <input
        type="text"
        name="Impression"
        defaultValue="Benign Prostatic Hyperplasia"
      />
      <br />
      <label htmlFor="DifferentialDiagnosis">DifferentialDiagnosis: </label>
      <input
        type="text"
        name="DifferentialDiagnosis"
        defaultValue="Prostate cancer, UTI"
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
        defaultValue="Alpha-blockers, 5-alpha reductase inhibitors"
      />
      <br />
      <label htmlFor="CarePlan">CarePlan: </label>
      <input
        type="text"
        name="CarePlan"
        defaultValue="Lifestyle changes, monitor symptoms"
      />
      <br />
      <label htmlFor="Accurex">Accurex: </label>
      <input
        type="text"
        name="Accurex"
        defaultValue="Regular follow-up to monitor symptom progression, PSA testing as indicated"
      />
      <br />
    </fieldset>
    <br />
    <fieldset>
      <legend>Kidney Stones</legend>
      <label htmlFor="ConditionID">ConditionID: </label>
      <input type="text" name="ConditionID" defaultValue="U3" />
      <br />
      <label htmlFor="ConditionName">ConditionName: </label>
      <input type="text" name="ConditionName" defaultValue="Kidney Stones" />
      <br />
      <label htmlFor="ChiefComplaint">ChiefComplaint: </label>
      <input
        type="text"
        name="ChiefComplaint"
        defaultValue="Severe pain in the side and back, below the ribs, pain on urination, pink, red, or brown urine."
      />
      <br />
      <label htmlFor="SocialHistory">SocialHistory: </label>
      <input
        type="text"
        name="SocialHistory"
        defaultValue="Dehydration, certain diets, family history."
      />
      <br />
      <label htmlFor="SystemsSurvey">SystemsSurvey: </label>
      <input
        type="text"
        name="SystemsSurvey"
        defaultValue="Hard deposits made of minerals and salts forming inside the kidneys."
      />
      <br />
      <label htmlFor="Vitals">Vitals: </label>
      <input type="text" name="Vitals" defaultValue="Normal" />
      <br />
      <label htmlFor="PhysicalExam">PhysicalExam: </label>
      <input
        type="text"
        name="PhysicalExam"
        defaultValue="Costovertebral angle tenderness on the affected side."
      />
      <br />
      <label htmlFor="Impression">Impression: </label>
      <input type="text" name="Impression" defaultValue="Kidney Stones" />
      <br />
      <label htmlFor="DifferentialDiagnosis">DifferentialDiagnosis: </label>
      <input
        type="text"
        name="DifferentialDiagnosis"
        defaultValue="Pyelonephritis, musculoskeletal pain"
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
        defaultValue="Pain relief, alpha-blockers, fluids"
      />
      <br />
      <label htmlFor="CarePlan">CarePlan: </label>
      <input
        type="text"
        name="CarePlan"
        defaultValue="Drink plenty of water, dietary modifications"
      />
      <br />
      <label htmlFor="Accurex">Accurex: </label>
      <input
        type="text"
        name="Accurex"
        defaultValue="Ultrasound or CT follow-up, evaluate for metabolic disorders if recurrent"
      />
      <br />
    </fieldset>
    <br />
    <fieldset>
      <legend>Erectile Dysfunction</legend>
      <label htmlFor="ConditionID">ConditionID: </label>
      <input type="text" name="ConditionID" defaultValue="U4" />
      <br />
      <label htmlFor="ConditionName">ConditionName: </label>
      <input
        type="text"
        name="ConditionName"
        defaultValue="Erectile Dysfunction"
      />
      <br />
      <label htmlFor="ChiefComplaint">ChiefComplaint: </label>
      <input
        type="text"
        name="ChiefComplaint"
        defaultValue="Trouble getting or keeping an erection firm enough for sex."
      />
      <br />
      <label htmlFor="SocialHistory">SocialHistory: </label>
      <input
        type="text"
        name="SocialHistory"
        defaultValue="Cardiovascular disease, diabetes, psychological factors."
      />
      <br />
      <label htmlFor="SystemsSurvey">SystemsSurvey: </label>
      <input
        type="text"
        name="SystemsSurvey"
        defaultValue="Can be due to a problem with blood flow, nerve supply, or hormones."
      />
      <br />
      <label htmlFor="Vitals">Vitals: </label>
      <input type="text" name="Vitals" defaultValue="Normal" />
      <br />
      <label htmlFor="PhysicalExam">PhysicalExam: </label>
      <input
        type="text"
        name="PhysicalExam"
        defaultValue="Physical exam typically normal; may assess secondary sexual characteristics."
      />
      <br />
      <label htmlFor="Impression">Impression: </label>
      <input
        type="text"
        name="Impression"
        defaultValue="Erectile Dysfunction"
      />
      <br />
      <label htmlFor="DifferentialDiagnosis">DifferentialDiagnosis: </label>
      <input
        type="text"
        name="DifferentialDiagnosis"
        defaultValue="Low libido, premature ejaculation"
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
        defaultValue="Phosphodiesterase type 5 inhibitors, lifestyle changes"
      />
      <br />
      <label htmlFor="CarePlan">CarePlan: </label>
      <input
        type="text"
        name="CarePlan"
        defaultValue="Counseling for psychological causes, manage underlying conditions"
      />
      <br />
      <label htmlFor="Accurex">Accurex: </label>
      <input
        type="text"
        name="Accurex"
        defaultValue="Review medications that may contribute to ED, consider specialist referral if no improvement"
      />
      <br />
    </fieldset>
    <br />
    <fieldset>
      <legend>Prostate Cancer</legend>
      <label htmlFor="ConditionID">ConditionID: </label>
      <input type="text" name="ConditionID" defaultValue="U5" />
      <br />
      <label htmlFor="ConditionName">ConditionName: </label>
      <input type="text" name="ConditionName" defaultValue="Prostate Cancer" />
      <br />
      <label htmlFor="ChiefComplaint">ChiefComplaint: </label>
      <input
        type="text"
        name="ChiefComplaint"
        defaultValue="Difficulty urinating, blood in semen, erectile dysfunction."
      />
      <br />
      <label htmlFor="SocialHistory">SocialHistory: </label>
      <input
        type="text"
        name="SocialHistory"
        defaultValue="Age, family history, race."
      />
      <br />
      <label htmlFor="SystemsSurvey">SystemsSurvey: </label>
      <input
        type="text"
        name="SystemsSurvey"
        defaultValue="Cancer that occurs in the prostate gland."
      />
      <br />
      <label htmlFor="Vitals">Vitals: </label>
      <input type="text" name="Vitals" defaultValue="Normal" />
      <br />
      <label htmlFor="PhysicalExam">PhysicalExam: </label>
      <input
        type="text"
        name="PhysicalExam"
        defaultValue="Prostate may be asymmetrical or have nodules on digital rectal examination."
      />
      <br />
      <label htmlFor="Impression">Impression: </label>
      <input type="text" name="Impression" defaultValue="Prostate Cancer" />
      <br />
      <label htmlFor="DifferentialDiagnosis">DifferentialDiagnosis: </label>
      <input
        type="text"
        name="DifferentialDiagnosis"
        defaultValue="Benign prostatic hyperplasia, prostatitis"
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
        defaultValue="Active surveillance, surgery, radiation therapy"
      />
      <br />
      <label htmlFor="CarePlan">CarePlan: </label>
      <input
        type="text"
        name="CarePlan"
        defaultValue="Regular PSA testing, monitor for signs of metastasis"
      />
      <br />
      <label htmlFor="Accurex">Accurex: </label>
      <input
        type="text"
        name="Accurex"
        defaultValue="Discuss treatment options, side effects, and impact on quality of life"
      />
      <br />
    </fieldset>
    <br />
    <fieldset>
      <legend>Interstitial Cystitis</legend>
      <label htmlFor="ConditionID">ConditionID: </label>
      <input type="text" name="ConditionID" defaultValue="U6" />
      <br />
      <label htmlFor="ConditionName">ConditionName: </label>
      <input
        type="text"
        name="ConditionName"
        defaultValue="Interstitial Cystitis"
      />
      <br />
      <label htmlFor="ChiefComplaint">ChiefComplaint: </label>
      <input
        type="text"
        name="ChiefComplaint"
        defaultValue="Pelvic pain, pressure, and discomfort related to the bladder, along with urinary frequency and urgency."
      />
      <br />
      <label htmlFor="SocialHistory">SocialHistory: </label>
      <input
        type="text"
        name="SocialHistory"
        defaultValue="Unknown cause, potentially associated with autoimmune reactions or hereditary factors."
      />
      <br />
      <label htmlFor="SystemsSurvey">SystemsSurvey: </label>
      <input
        type="text"
        name="SystemsSurvey"
        defaultValue="A chronic condition characterized by bladder pressure, bladder pain, and sometimes pelvic pain."
      />
      <br />
      <label htmlFor="Vitals">Vitals: </label>
      <input type="text" name="Vitals" defaultValue="Normal" />
      <br />
      <label htmlFor="PhysicalExam">PhysicalExam: </label>
      <input
        type="text"
        name="PhysicalExam"
        defaultValue="Tenderness on bladder palpation, no specific findings."
      />
      <br />
      <label htmlFor="Impression">Impression: </label>
      <input
        type="text"
        name="Impression"
        defaultValue="Interstitial Cystitis"
      />
      <br />
      <label htmlFor="DifferentialDiagnosis">DifferentialDiagnosis: </label>
      <input
        type="text"
        name="DifferentialDiagnosis"
        defaultValue="Urinary tract infection, overactive bladder"
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
        defaultValue="Diet modification, pain management, bladder instillations"
      />
      <br />
      <label htmlFor="CarePlan">CarePlan: </label>
      <input
        type="text"
        name="CarePlan"
        defaultValue="Stress management, pelvic floor therapy"
      />
      <br />
      <label htmlFor="Accurex">Accurex: </label>
      <input
        type="text"
        name="Accurex"
        defaultValue="Regular follow-up, symptom diary to identify flare triggers"
      />
      <br />
    </fieldset>
    <br />
    <fieldset>
      <legend>Overactive Bladder</legend>
      <label htmlFor="ConditionID">ConditionID: </label>
      <input type="text" name="ConditionID" defaultValue="U7" />
      <br />
      <label htmlFor="ConditionName">ConditionName: </label>
      <input
        type="text"
        name="ConditionName"
        defaultValue="Overactive Bladder"
      />
      <br />
      <label htmlFor="ChiefComplaint">ChiefComplaint: </label>
      <input
        type="text"
        name="ChiefComplaint"
        defaultValue="Urinary urgency, with or without urge incontinence, usually with frequency and nocturia."
      />
      <br />
      <label htmlFor="SocialHistory">SocialHistory: </label>
      <input
        type="text"
        name="SocialHistory"
        defaultValue="Unknown cause, may be associated with neurological conditions."
      />
      <br />
      <label htmlFor="SystemsSurvey">SystemsSurvey: </label>
      <input
        type="text"
        name="SystemsSurvey"
        defaultValue="A condition where the bladder muscle contracts involuntarily, causing frequent and urgent need to urinate."
      />
      <br />
      <label htmlFor="Vitals">Vitals: </label>
      <input type="text" name="Vitals" defaultValue="Normal" />
      <br />
      <label htmlFor="PhysicalExam">PhysicalExam: </label>
      <input
        type="text"
        name="PhysicalExam"
        defaultValue="Physical exam typically normal; focused on ruling out other causes."
      />
      <br />
      <label htmlFor="Impression">Impression: </label>
      <input type="text" name="Impression" defaultValue="Overactive Bladder" />
      <br />
      <label htmlFor="DifferentialDiagnosis">DifferentialDiagnosis: </label>
      <input
        type="text"
        name="DifferentialDiagnosis"
        defaultValue="Urinary tract infection, interstitial cystitis"
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
        defaultValue="Bladder training, pelvic floor exercises, anticholinergic medications"
      />
      <br />
      <label htmlFor="CarePlan">CarePlan: </label>
      <input
        type="text"
        name="CarePlan"
        defaultValue="Dietary modifications, fluid management"
      />
      <br />
      <label htmlFor="Accurex">Accurex: </label>
      <input
        type="text"
        name="Accurex"
        defaultValue="Evaluate efficacy of treatment, adjust as needed, consider neuromodulation for refractory cases"
      />
      <br />
    </fieldset>
    <br />
    <fieldset>
      <legend>Prostatitis</legend>
      <label htmlFor="ConditionID">ConditionID: </label>
      <input type="text" name="ConditionID" defaultValue="U8" />
      <br />
      <label htmlFor="ConditionName">ConditionName: </label>
      <input type="text" name="ConditionName" defaultValue="Prostatitis" />
      <br />
      <label htmlFor="ChiefComplaint">ChiefComplaint: </label>
      <input
        type="text"
        name="ChiefComplaint"
        defaultValue="Pain in the groin, painful urination, difficulty urinating, and flu-like symptoms."
      />
      <br />
      <label htmlFor="SocialHistory">SocialHistory: </label>
      <input
        type="text"
        name="SocialHistory"
        defaultValue="Can be caused by bacterial infection or non-infectious conditions."
      />
      <br />
      <label htmlFor="SystemsSurvey">SystemsSurvey: </label>
      <input
        type="text"
        name="SystemsSurvey"
        defaultValue="Inflammation of the prostate gland."
      />
      <br />
      <label htmlFor="Vitals">Vitals: </label>
      <input
        type="text"
        name="Vitals"
        defaultValue="Normal or elevated temperature"
      />
      <br />
      <label htmlFor="PhysicalExam">PhysicalExam: </label>
      <input
        type="text"
        name="PhysicalExam"
        defaultValue="Tender and swollen prostate on digital rectal examination."
      />
      <br />
      <label htmlFor="Impression">Impression: </label>
      <input type="text" name="Impression" defaultValue="Prostatitis" />
      <br />
      <label htmlFor="DifferentialDiagnosis">DifferentialDiagnosis: </label>
      <input
        type="text"
        name="DifferentialDiagnosis"
        defaultValue="Benign prostatic hyperplasia, urinary tract infection"
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
        defaultValue="Antibiotics for bacterial prostatitis, alpha-blockers, anti-inflammatory medications"
      />
      <br />
      <label htmlFor="CarePlan">CarePlan: </label>
      <input
        type="text"
        name="CarePlan"
        defaultValue="Warm baths, increased fluid intake"
      />
      <br />
      <label htmlFor="Accurex">Accurex: </label>
      <input
        type="text"
        name="Accurex"
        defaultValue="Monitor symptoms, adjust treatment based on bacterial culture results"
      />
      <br />
    </fieldset>
    <br />
    <fieldset>
      <legend>Urethral Stricture</legend>
      <label htmlFor="ConditionID">ConditionID: </label>
      <input type="text" name="ConditionID" defaultValue="U9" />
      <br />
      <label htmlFor="ConditionName">ConditionName: </label>
      <input
        type="text"
        name="ConditionName"
        defaultValue="Urethral Stricture"
      />
      <br />
      <label htmlFor="ChiefComplaint">ChiefComplaint: </label>
      <input
        type="text"
        name="ChiefComplaint"
        defaultValue="Decreased urine stream, straining to urinate, spraying of urine stream, urinary retention."
      />
      <br />
      <label htmlFor="SocialHistory">SocialHistory: </label>
      <input
        type="text"
        name="SocialHistory"
        defaultValue="Can result from injury, infection, surgery, or inflammation."
      />
      <br />
      <label htmlFor="SystemsSurvey">SystemsSurvey: </label>
      <input
        type="text"
        name="SystemsSurvey"
        defaultValue="A narrowing of the urethra caused by scarring."
      />
      <br />
      <label htmlFor="Vitals">Vitals: </label>
      <input type="text" name="Vitals" defaultValue="Normal" />
      <br />
      <label htmlFor="PhysicalExam">PhysicalExam: </label>
      <input
        type="text"
        name="PhysicalExam"
        defaultValue="Physical exam may reveal a decreased flow of urine."
      />
      <br />
      <label htmlFor="Impression">Impression: </label>
      <input type="text" name="Impression" defaultValue="Urethral Stricture" />
      <br />
      <label htmlFor="DifferentialDiagnosis">DifferentialDiagnosis: </label>
      <input
        type="text"
        name="DifferentialDiagnosis"
        defaultValue="Benign prostatic hyperplasia, prostate cancer"
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
        defaultValue="Urethral dilation, urethroplasty, or endoscopic urethrotomy"
      />
      <br />
      <label htmlFor="CarePlan">CarePlan: </label>
      <input
        type="text"
        name="CarePlan"
        defaultValue="Avoid catheterizations and urethral instrumentation when possible"
      />
      <br />
      <label htmlFor="Accurex">Accurex: </label>
      <input
        type="text"
        name="Accurex"
        defaultValue="Follow-up to monitor for recurrence, post-operative care if surgery is performed"
      />
      <br />
    </fieldset>
    <br />
    <fieldset>
      <legend>Testicular Cancer</legend>
      <label htmlFor="ConditionID">ConditionID: </label>
      <input type="text" name="ConditionID" defaultValue="U10" />
      <br />
      <label htmlFor="ConditionName">ConditionName: </label>
      <input
        type="text"
        name="ConditionName"
        defaultValue="Testicular Cancer"
      />
      <br />
      <label htmlFor="ChiefComplaint">ChiefComplaint: </label>
      <input
        type="text"
        name="ChiefComplaint"
        defaultValue="Lump or enlargement in either testicle, a feeling of heaviness in the scrotum, dull ache in the abdomen or groin."
      />
      <br />
      <label htmlFor="SocialHistory">SocialHistory: </label>
      <input
        type="text"
        name="SocialHistory"
        defaultValue="Risk factors include undescended testicle, family history, and age."
      />
      <br />
      <label htmlFor="SystemsSurvey">SystemsSurvey: </label>
      <input
        type="text"
        name="SystemsSurvey"
        defaultValue="A cancer that originates in the testicles, typically affecting younger men."
      />
      <br />
      <label htmlFor="Vitals">Vitals: </label>
      <input type="text" name="Vitals" defaultValue="Normal" />
      <br />
      <label htmlFor="PhysicalExam">PhysicalExam: </label>
      <input
        type="text"
        name="PhysicalExam"
        defaultValue="Palpable mass in the testicle, with or without pain."
      />
      <br />
      <label htmlFor="Impression">Impression: </label>
      <input type="text" name="Impression" defaultValue="Testicular Cancer" />
      <br />
      <label htmlFor="DifferentialDiagnosis">DifferentialDiagnosis: </label>
      <input
        type="text"
        name="DifferentialDiagnosis"
        defaultValue="Epididymitis, hydrocele"
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
        defaultValue="Surgical removal of the affected testicle, possibly followed by radiation or chemotherapy"
      />
      <br />
      <label htmlFor="CarePlan">CarePlan: </label>
      <input
        type="text"
        name="CarePlan"
        defaultValue="Regular testicular self-examinations, surveillance imaging"
      />
      <br />
      <label htmlFor="Accurex">Accurex: </label>
      <input
        type="text"
        name="Accurex"
        defaultValue="Counselling on fertility preservation, psychological support"
      />
      <br />
    </fieldset>
    <br />
    <fieldset>
      <legend>Epididymitis</legend>
      <label htmlFor="ConditionID">ConditionID: </label>
      <input type="text" name="ConditionID" defaultValue="U11" />
      <br />
      <label htmlFor="ConditionName">ConditionName: </label>
      <input type="text" name="ConditionName" defaultValue="Epididymitis" />
      <br />
      <label htmlFor="ChiefComplaint">ChiefComplaint: </label>
      <input
        type="text"
        name="ChiefComplaint"
        defaultValue="Scrotal pain, swelling, tenderness, and warmth; fever; and sometimes discharge from the penis."
      />
      <br />
      <label htmlFor="SocialHistory">SocialHistory: </label>
      <input
        type="text"
        name="SocialHistory"
        defaultValue="Most commonly caused by bacterial infection or sexually transmitted infections."
      />
      <br />
      <label htmlFor="SystemsSurvey">SystemsSurvey: </label>
      <input
        type="text"
        name="SystemsSurvey"
        defaultValue="Inflammation of the epididymis."
      />
      <br />
      <label htmlFor="Vitals">Vitals: </label>
      <input
        type="text"
        name="Vitals"
        defaultValue="Normal or slightly elevated temperature"
      />
      <br />
      <label htmlFor="PhysicalExam">PhysicalExam: </label>
      <input
        type="text"
        name="PhysicalExam"
        defaultValue="Swollen, tender epididymis on palpation; possible hydrocele."
      />
      <br />
      <label htmlFor="Impression">Impression: </label>
      <input type="text" name="Impression" defaultValue="Epididymitis" />
      <br />
      <label htmlFor="DifferentialDiagnosis">DifferentialDiagnosis: </label>
      <input
        type="text"
        name="DifferentialDiagnosis"
        defaultValue="Testicular torsion, orchitis, inguinal hernia"
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
        defaultValue="Antibiotics, scrotal elevation, and analgesics"
      />
      <br />
      <label htmlFor="CarePlan">CarePlan: </label>
      <input
        type="text"
        name="CarePlan"
        defaultValue="Rest, scrotal support, and follow-up to ensure resolution of infection"
      />
      <br />
      <label htmlFor="Accurex">Accurex: </label>
      <input
        type="text"
        name="Accurex"
        defaultValue="Educate on STI prevention and the importance of completing antibiotic therapy"
      />
      <br />
    </fieldset>
    <br />
    <fieldset>
      <legend>Orchitis</legend>
      <label htmlFor="ConditionID">ConditionID: </label>
      <input type="text" name="ConditionID" defaultValue="U12" />
      <br />
      <label htmlFor="ConditionName">ConditionName: </label>
      <input type="text" name="ConditionName" defaultValue="Orchitis" />
      <br />
      <label htmlFor="ChiefComplaint">ChiefComplaint: </label>
      <input
        type="text"
        name="ChiefComplaint"
        defaultValue="Testicular swelling, pain, tenderness, nausea, and fever."
      />
      <br />
      <label htmlFor="SocialHistory">SocialHistory: </label>
      <input
        type="text"
        name="SocialHistory"
        defaultValue="Can be caused by bacterial infections or viral mumps infection."
      />
      <br />
      <label htmlFor="SystemsSurvey">SystemsSurvey: </label>
      <input
        type="text"
        name="SystemsSurvey"
        defaultValue="Inflammation of one or both testicles."
      />
      <br />
      <label htmlFor="Vitals">Vitals: </label>
      <input
        type="text"
        name="Vitals"
        defaultValue="Normal or elevated temperature"
      />
      <br />
      <label htmlFor="PhysicalExam">PhysicalExam: </label>
      <input
        type="text"
        name="PhysicalExam"
        defaultValue="Swollen, tender testis; erythema of the scrotal skin."
      />
      <br />
      <label htmlFor="Impression">Impression: </label>
      <input type="text" name="Impression" defaultValue="Orchitis" />
      <br />
      <label htmlFor="DifferentialDiagnosis">DifferentialDiagnosis: </label>
      <input
        type="text"
        name="DifferentialDiagnosis"
        defaultValue="Epididymitis, testicular torsion, testicular cancer"
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
        defaultValue="Supportive care, antibiotics for bacterial causes, analgesics"
      />
      <br />
      <label htmlFor="CarePlan">CarePlan: </label>
      <input
        type="text"
        name="CarePlan"
        defaultValue="Bed rest, ice packs, scrotal elevation"
      />
      <br />
      <label htmlFor="Accurex">Accurex: </label>
      <input
        type="text"
        name="Accurex"
        defaultValue="Monitor for improvement, advise on vaccination against mumps"
      />
      <br />
    </fieldset>
    <br />
    <fieldset>
      <legend>Testicular Torsion</legend>
      <label htmlFor="ConditionID">ConditionID: </label>
      <input type="text" name="ConditionID" defaultValue="U13" />
      <br />
      <label htmlFor="ConditionName">ConditionName: </label>
      <input
        type="text"
        name="ConditionName"
        defaultValue="Testicular Torsion"
      />
      <br />
      <label htmlFor="ChiefComplaint">ChiefComplaint: </label>
      <input
        type="text"
        name="ChiefComplaint"
        defaultValue="Sudden severe testicular pain, swelling, abdominal pain, nausea, and vomiting."
      />
      <br />
      <label htmlFor="SocialHistory">SocialHistory: </label>
      <input
        type="text"
        name="SocialHistory"
        defaultValue="Most common in adolescents, can occur after physical activity or trauma."
      />
      <br />
      <label htmlFor="SystemsSurvey">SystemsSurvey: </label>
      <input
        type="text"
        name="SystemsSurvey"
        defaultValue="Twisting of the spermatic cord cutting off blood supply to the testicle."
      />
      <br />
      <label htmlFor="Vitals">Vitals: </label>
      <input type="text" name="Vitals" defaultValue="Normal" />
      <br />
      <label htmlFor="PhysicalExam">PhysicalExam: </label>
      <input
        type="text"
        name="PhysicalExam"
        defaultValue="High-riding testicle, abnormal testicle position, absent cremasteric reflex."
      />
      <br />
      <label htmlFor="Impression">Impression: </label>
      <input type="text" name="Impression" defaultValue="Testicular Torsion" />
      <br />
      <label htmlFor="DifferentialDiagnosis">DifferentialDiagnosis: </label>
      <input
        type="text"
        name="DifferentialDiagnosis"
        defaultValue="Epididymitis, orchitis, inguinal hernia"
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
        defaultValue="Emergency surgery to untwist the spermatic cord"
      />
      <br />
      <label htmlFor="CarePlan">CarePlan: </label>
      <input
        type="text"
        name="CarePlan"
        defaultValue="Surgical fixation of both testicles to prevent recurrence"
      />
      <br />
      <label htmlFor="Accurex">Accurex: </label>
      <input
        type="text"
        name="Accurex"
        defaultValue="Educate on recognizing symptoms for immediate attention"
      />
      <br />
    </fieldset>
    <br />
    <fieldset>
      <legend>Bladder Cancer</legend>
      <label htmlFor="ConditionID">ConditionID: </label>
      <input type="text" name="ConditionID" defaultValue="U14" />
      <br />
      <label htmlFor="ConditionName">ConditionName: </label>
      <input type="text" name="ConditionName" defaultValue="Bladder Cancer" />
      <br />
      <label htmlFor="ChiefComplaint">ChiefComplaint: </label>
      <input
        type="text"
        name="ChiefComplaint"
        defaultValue="Blood in urine, frequent urination, painful urination, urinary urgency."
      />
      <br />
      <label htmlFor="SocialHistory">SocialHistory: </label>
      <input
        type="text"
        name="SocialHistory"
        defaultValue="Risk factors include smoking, exposure to chemicals, and chronic irritation of the bladder lining."
      />
      <br />
      <label htmlFor="SystemsSurvey">SystemsSurvey: </label>
      <input
        type="text"
        name="SystemsSurvey"
        defaultValue="Cancer that begins in the cells of the bladder."
      />
      <br />
      <label htmlFor="Vitals">Vitals: </label>
      <input type="text" name="Vitals" defaultValue="Normal" />
      <br />
      <label htmlFor="PhysicalExam">PhysicalExam: </label>
      <input
        type="text"
        name="PhysicalExam"
        defaultValue="Physical exam typically normal; findings based on cystoscopy and imaging."
      />
      <br />
      <label htmlFor="Impression">Impression: </label>
      <input type="text" name="Impression" defaultValue="Bladder Cancer" />
      <br />
      <label htmlFor="DifferentialDiagnosis">DifferentialDiagnosis: </label>
      <input
        type="text"
        name="DifferentialDiagnosis"
        defaultValue="UTI, benign prostatic hyperplasia, kidney stones"
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
        defaultValue="Surgery, intravesical therapy, chemotherapy, radiation"
      />
      <br />
      <label htmlFor="CarePlan">CarePlan: </label>
      <input
        type="text"
        name="CarePlan"
        defaultValue="Surveillance cystoscopy post-treatment, smoking cessation"
      />
      <br />
      <label htmlFor="Accurex">Accurex: </label>
      <input
        type="text"
        name="Accurex"
        defaultValue="Regular monitoring for recurrence, manage side effects of treatment"
      />
      <br />
    </fieldset>
    <br />
    <fieldset>
      <legend>Peyronies Disease</legend>
      <label htmlFor="ConditionID">ConditionID: </label>
      <input type="text" name="ConditionID" defaultValue="U15" />
      <br />
      <label htmlFor="ConditionName">ConditionName: </label>
      <input
        type="text"
        name="ConditionName"
        defaultValue="Peyronies Disease"
      />
      <br />
      <label htmlFor="ChiefComplaint">ChiefComplaint: </label>
      <input
        type="text"
        name="ChiefComplaint"
        defaultValue="Penile curvature, pain during erections, erectile dysfunction."
      />
      <br />
      <label htmlFor="SocialHistory">SocialHistory: </label>
      <input
        type="text"
        name="SocialHistory"
        defaultValue="Caused by fibrous scar tissue developing inside the penis."
      />
      <br />
      <label htmlFor="SystemsSurvey">SystemsSurvey: </label>
      <input
        type="text"
        name="SystemsSurvey"
        defaultValue="A condition that leads to a curved, sometimes painful erection."
      />
      <br />
      <label htmlFor="Vitals">Vitals: </label>
      <input type="text" name="Vitals" defaultValue="Normal" />
      <br />
      <label htmlFor="PhysicalExam">PhysicalExam: </label>
      <input
        type="text"
        name="PhysicalExam"
        defaultValue="Palpable plaque within the penile shaft, curvature noted during erection."
      />
      <br />
      <label htmlFor="Impression">Impression: </label>
      <input type="text" name="Impression" defaultValue="Peyronies Disease" />
      <br />
      <label htmlFor="DifferentialDiagnosis">DifferentialDiagnosis: </label>
      <input
        type="text"
        name="DifferentialDiagnosis"
        defaultValue="Congenital penile curvature, erectile dysfunction"
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
        defaultValue="Oral medications, injections into the penis, surgery in severe cases"
      />
      <br />
      <label htmlFor="CarePlan">CarePlan: </label>
      <input
        type="text"
        name="CarePlan"
        defaultValue="Pain management, use of vacuum devices for erection aid"
      />
      <br />
      <label htmlFor="Accurex">Accurex: </label>
      <input
        type="text"
        name="Accurex"
        defaultValue="Follow-up to monitor progression, discuss surgical options if necessary"
      />
      <br />
    </fieldset>
    <br />
    <fieldset>
      <legend>Prostatitis</legend>
      <label htmlFor="ConditionID">ConditionID: </label>
      <input type="text" name="ConditionID" defaultValue="U16" />
      <br />
      <label htmlFor="ConditionName">ConditionName: </label>
      <input type="text" name="ConditionName" defaultValue="Prostatitis" />
      <br />
      <label htmlFor="ChiefComplaint">ChiefComplaint: </label>
      <input
        type="text"
        name="ChiefComplaint"
        defaultValue="Pain in the groin, pelvic area, or genitals, and sometimes urinary symptoms such as burning sensation during urination or urgency."
      />
      <br />
      <label htmlFor="SocialHistory">SocialHistory: </label>
      <input
        type="text"
        name="SocialHistory"
        defaultValue="Occurs in men of all ages but most commonly in men younger than 50."
      />
      <br />
      <label htmlFor="SystemsSurvey">SystemsSurvey: </label>
      <input
        type="text"
        name="SystemsSurvey"
        defaultValue="Inflammation or infection of the prostate gland."
      />
      <br />
      <label htmlFor="Vitals">Vitals: </label>
      <input
        type="text"
        name="Vitals"
        defaultValue="Normal, may have elevated temperature in acute cases"
      />
      <br />
      <label htmlFor="PhysicalExam">PhysicalExam: </label>
      <input
        type="text"
        name="PhysicalExam"
        defaultValue="Tender and swollen prostate on digital rectal examination, may have discomfort or pain."
      />
      <br />
      <label htmlFor="Impression">Impression: </label>
      <input type="text" name="Impression" defaultValue="Prostatitis" />
      <br />
      <label htmlFor="DifferentialDiagnosis">DifferentialDiagnosis: </label>
      <input
        type="text"
        name="DifferentialDiagnosis"
        defaultValue="Benign prostatic hyperplasia (BPH), urinary tract infection (UTI), bladder cancer"
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
        defaultValue="Antibiotics for bacterial prostatitis, alpha-blockers, anti-inflammatory medications for chronic prostatitis"
      />
      <br />
      <label htmlFor="CarePlan">CarePlan: </label>
      <input
        type="text"
        name="CarePlan"
        defaultValue="Warm baths, pelvic floor exercises, avoid irritants such as caffeine and spicy foods"
      />
      <br />
      <label htmlFor="Accurex">Accurex: </label>
      <input
        type="text"
        name="Accurex"
        defaultValue="Regular follow-up to assess response to treatment, adjust therapy as needed, and manage chronic symptoms"
      />
      <br />
    </fieldset>
    <br />
    <input type="submit" defaultValue="Submit" />
  </form>
    </div>
  );
}

export default UrologyForm;
