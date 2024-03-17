import React from 'react';

function MSKForm() {
  return (
    <div>
  <title>MSK Form</title>
  <form action="submit_form_endpoint" method="post">
    <fieldset>
      <legend>Osteoporosis</legend>
      <label htmlFor="ConditionID">ConditionID: </label>
      <input type="text" name="ConditionID" defaultValue="M1" />
      <br />
      <label htmlFor="ConditionName">ConditionName: </label>
      <input type="text" name="ConditionName" defaultValue="Osteoporosis" />
      <br />
      <label htmlFor="ChiefComplaint">ChiefComplaint: </label>
      <input
        type="text"
        name="ChiefComplaint"
        defaultValue="Fractures with minimal trauma, back pain, loss of height over time."
      />
      <br />
      <label htmlFor="SocialHistory">SocialHistory: </label>
      <input
        type="text"
        name="SocialHistory"
        defaultValue="Family history of osteoporosis, sedentary lifestyle, inadequate calcium and vitamin D intake."
      />
      <br />
      <label htmlFor="SystemsSurvey">SystemsSurvey: </label>
      <input
        type="text"
        name="SystemsSurvey"
        defaultValue="A condition characterised by weakened bones that are more prone to fracture."
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
        defaultValue="Decreased bone density on physical exam; may have kyphosis."
      />
      <br />
      <label htmlFor="Impression">Impression: </label>
      <input type="text" name="Impression" defaultValue="Osteoporosis" />
      <br />
      <label htmlFor="DifferentialDiagnosis">DifferentialDiagnosis: </label>
      <input
        type="text"
        name="DifferentialDiagnosis"
        defaultValue="Osteomalacia, secondary causes of bone loss"
      />
      <br />
      <label htmlFor="Allergies">Allergies: </label>
      <input type="text" name="Allergies" defaultValue="None" />
      <br />
      <label htmlFor="Pregnancy">Pregnancy: </label>
      <input
        type="text"
        name="Pregnancy"
        defaultValue="Calcium and vitamin D supplementation, weight-bearing exercise"
      />
      <br />
      <label htmlFor="Treatment">Treatment: </label>
      <input
        type="text"
        name="Treatment"
        defaultValue="Bisphosphonates, denosumab, teriparatide"
      />
      <br />
      <label htmlFor="CarePlan">CarePlan: </label>
      <input
        type="text"
        name="CarePlan"
        defaultValue="Regular bone density monitoring, fall prevention strategies"
      />
      <br />
      <label htmlFor="Accurex">Accurex: </label>
      <input type="text" name="Accurex" defaultValue="N/A" />
      <br />
    </fieldset>
    <br />
    <fieldset>
      <legend>Gout</legend>
      <label htmlFor="ConditionID">ConditionID: </label>
      <input type="text" name="ConditionID" defaultValue="M2" />
      <br />
      <label htmlFor="ConditionName">ConditionName: </label>
      <input type="text" name="ConditionName" defaultValue="Gout" />
      <br />
      <label htmlFor="ChiefComplaint">ChiefComplaint: </label>
      <input
        type="text"
        name="ChiefComplaint"
        defaultValue="Severe joint pain, redness, and swelling, often affecting the big toe."
      />
      <br />
      <label htmlFor="SocialHistory">SocialHistory: </label>
      <input
        type="text"
        name="SocialHistory"
        defaultValue="High purine diet, alcohol consumption, family history of gout."
      />
      <br />
      <label htmlFor="SystemsSurvey">SystemsSurvey: </label>
      <input
        type="text"
        name="SystemsSurvey"
        defaultValue="A form of inflammatory arthritis characterised by elevated levels of uric acid in the blood."
      />
      <br />
      <label htmlFor="Vitals">Vitals: </label>
      <input
        type="text"
        name="Vitals"
        defaultValue="BP 130/85, HR 80, Temp 37°C"
      />
      <br />
      <label htmlFor="PhysicalExam">PhysicalExam: </label>
      <input
        type="text"
        name="PhysicalExam"
        defaultValue="Swollen, tender, red joint; tophus formation in chronic cases."
      />
      <br />
      <label htmlFor="Impression">Impression: </label>
      <input type="text" name="Impression" defaultValue="Gout" />
      <br />
      <label htmlFor="DifferentialDiagnosis">DifferentialDiagnosis: </label>
      <input
        type="text"
        name="DifferentialDiagnosis"
        defaultValue="Septic arthritis, pseudogout"
      />
      <br />
      <label htmlFor="Allergies">Allergies: </label>
      <input type="text" name="Allergies" defaultValue="None" />
      <br />
      <label htmlFor="Pregnancy">Pregnancy: </label>
      <input
        type="text"
        name="Pregnancy"
        defaultValue="Diet modification, avoid triggers like red meat and alcohol"
      />
      <br />
      <label htmlFor="Treatment">Treatment: </label>
      <input
        type="text"
        name="Treatment"
        defaultValue="NSAIDs, colchicine, allopurinol for urate lowering"
      />
      <br />
      <label htmlFor="CarePlan">CarePlan: </label>
      <input
        type="text"
        name="CarePlan"
        defaultValue="Lifestyle changes, monitoring of uric acid levels"
      />
      <br />
      <label htmlFor="Accurex">Accurex: </label>
      <input type="text" name="Accurex" defaultValue="N/A" />
      <br />
    </fieldset>
    <br />
    <fieldset>
      <legend>Osteoarthritis</legend>
      <label htmlFor="ConditionID">ConditionID: </label>
      <input type="text" name="ConditionID" defaultValue="M3" />
      <br />
      <label htmlFor="ConditionName">ConditionName: </label>
      <input type="text" name="ConditionName" defaultValue="Osteoarthritis" />
      <br />
      <label htmlFor="ChiefComplaint">ChiefComplaint: </label>
      <input
        type="text"
        name="ChiefComplaint"
        defaultValue="Joint pain and stiffness that worsen with activity, limited range of motion."
      />
      <br />
      <label htmlFor="SocialHistory">SocialHistory: </label>
      <input
        type="text"
        name="SocialHistory"
        defaultValue="Aging, joint injury, obesity."
      />
      <br />
      <label htmlFor="SystemsSurvey">SystemsSurvey: </label>
      <input
        type="text"
        name="SystemsSurvey"
        defaultValue="Degenerative joint disease leading to cartilage breakdown."
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
        defaultValue="Crepitus, joint tenderness, bony enlargements."
      />
      <br />
      <label htmlFor="Impression">Impression: </label>
      <input type="text" name="Impression" defaultValue="Osteoarthritis" />
      <br />
      <label htmlFor="DifferentialDiagnosis">DifferentialDiagnosis: </label>
      <input
        type="text"
        name="DifferentialDiagnosis"
        defaultValue="Rheumatoid arthritis, gout"
      />
      <br />
      <label htmlFor="Allergies">Allergies: </label>
      <input type="text" name="Allergies" defaultValue="None" />
      <br />
      <label htmlFor="Pregnancy">Pregnancy: </label>
      <input
        type="text"
        name="Pregnancy"
        defaultValue="Weight management, physical activity"
      />
      <br />
      <label htmlFor="Treatment">Treatment: </label>
      <input
        type="text"
        name="Treatment"
        defaultValue="Acetaminophen, NSAIDs, intra-articular corticosteroids"
      />
      <br />
      <label htmlFor="CarePlan">CarePlan: </label>
      <input
        type="text"
        name="CarePlan"
        defaultValue="Physical therapy, assistive devices for mobility"
      />
      <br />
      <label htmlFor="Accurex">Accurex: </label>
      <input type="text" name="Accurex" defaultValue="N/A" />
      <br />
    </fieldset>
    <br />
    <fieldset>
      <legend>Tendinitis</legend>
      <label htmlFor="ConditionID">ConditionID: </label>
      <input type="text" name="ConditionID" defaultValue="M4" />
      <br />
      <label htmlFor="ConditionName">ConditionName: </label>
      <input type="text" name="ConditionName" defaultValue="Tendinitis" />
      <br />
      <label htmlFor="ChiefComplaint">ChiefComplaint: </label>
      <input
        type="text"
        name="ChiefComplaint"
        defaultValue="Pain and tenderness near a joint, worsened by movement."
      />
      <br />
      <label htmlFor="SocialHistory">SocialHistory: </label>
      <input
        type="text"
        name="SocialHistory"
        defaultValue="Repetitive motion, injury, age-related wear and tear."
      />
      <br />
      <label htmlFor="SystemsSurvey">SystemsSurvey: </label>
      <input
        type="text"
        name="SystemsSurvey"
        defaultValue="Inflammation or irritation of a tendon."
      />
      <br />
      <label htmlFor="Vitals">Vitals: </label>
      <input
        type="text"
        name="Vitals"
        defaultValue="BP 120/80, HR 72, Temp 37°C"
      />
      <br />
      <label htmlFor="PhysicalExam">PhysicalExam: </label>
      <input
        type="text"
        name="PhysicalExam"
        defaultValue="Tenderness on palpation near the affected tendon."
      />
      <br />
      <label htmlFor="Impression">Impression: </label>
      <input type="text" name="Impression" defaultValue="Tendinitis" />
      <br />
      <label htmlFor="DifferentialDiagnosis">DifferentialDiagnosis: </label>
      <input
        type="text"
        name="DifferentialDiagnosis"
        defaultValue="Bursitis, partial tendon tear"
      />
      <br />
      <label htmlFor="Allergies">Allergies: </label>
      <input type="text" name="Allergies" defaultValue="None" />
      <br />
      <label htmlFor="Pregnancy">Pregnancy: </label>
      <input
        type="text"
        name="Pregnancy"
        defaultValue="Rest, ice, compression, elevation (RICE)"
      />
      <br />
      <label htmlFor="Treatment">Treatment: </label>
      <input
        type="text"
        name="Treatment"
        defaultValue="NSAIDs, physical therapy, corticosteroid injections"
      />
      <br />
      <label htmlFor="CarePlan">CarePlan: </label>
      <input
        type="text"
        name="CarePlan"
        defaultValue="Activity modification, ergonomic adjustments"
      />
      <br />
      <label htmlFor="Accurex">Accurex: </label>
      <input type="text" name="Accurex" defaultValue="N/A" />
      <br />
    </fieldset>
    <br />
    <fieldset>
      <legend>Carpal Tunnel Syndrome</legend>
      <label htmlFor="ConditionID">ConditionID: </label>
      <input type="text" name="ConditionID" defaultValue="M5" />
      <br />
      <label htmlFor="ConditionName">ConditionName: </label>
      <input
        type="text"
        name="ConditionName"
        defaultValue="Carpal Tunnel Syndrome"
      />
      <br />
      <label htmlFor="ChiefComplaint">ChiefComplaint: </label>
      <input
        type="text"
        name="ChiefComplaint"
        defaultValue="Numbness, tingling, weakness, and pain in the hand and fingers."
      />
      <br />
      <label htmlFor="SocialHistory">SocialHistory: </label>
      <input
        type="text"
        name="SocialHistory"
        defaultValue="Repetitive hand use, wrist anatomy, health conditions."
      />
      <br />
      <label htmlFor="SystemsSurvey">SystemsSurvey: </label>
      <input
        type="text"
        name="SystemsSurvey"
        defaultValue="A condition caused by pressure on the median nerve in the carpal tunnel."
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
        defaultValue="Positive Tinels sign, Phalens manoeuvre."
      />
      <br />
      <label htmlFor="Impression">Impression: </label>
      <input
        type="text"
        name="Impression"
        defaultValue="Carpal Tunnel Syndrome"
      />
      <br />
      <label htmlFor="DifferentialDiagnosis">DifferentialDiagnosis: </label>
      <input
        type="text"
        name="DifferentialDiagnosis"
        defaultValue="Rheumatoid arthritis, neuropathy"
      />
      <br />
      <label htmlFor="Allergies">Allergies: </label>
      <input type="text" name="Allergies" defaultValue="None" />
      <br />
      <label htmlFor="Pregnancy">Pregnancy: </label>
      <input
        type="text"
        name="Pregnancy"
        defaultValue="Ergonomic adjustments, wrist splints"
      />
      <br />
      <label htmlFor="Treatment">Treatment: </label>
      <input
        type="text"
        name="Treatment"
        defaultValue="NSAIDs, corticosteroid injections, surgery if severe"
      />
      <br />
      <label htmlFor="CarePlan">CarePlan: </label>
      <input
        type="text"
        name="CarePlan"
        defaultValue="Wrist splinting at night, ergonomic assessment"
      />
      <br />
      <label htmlFor="Accurex">Accurex: </label>
      <input type="text" name="Accurex" defaultValue="N/A" />
      <br />
    </fieldset>
    <br />
    <fieldset>
      <legend>Bursitis</legend>
      <label htmlFor="ConditionID">ConditionID: </label>
      <input type="text" name="ConditionID" defaultValue="M6" />
      <br />
      <label htmlFor="ConditionName">ConditionName: </label>
      <input type="text" name="ConditionName" defaultValue="Bursitis" />
      <br />
      <label htmlFor="ChiefComplaint">ChiefComplaint: </label>
      <input
        type="text"
        name="ChiefComplaint"
        defaultValue="Joint pain and swelling, tenderness, and warmth over the affected area."
      />
      <br />
      <label htmlFor="SocialHistory">SocialHistory: </label>
      <input
        type="text"
        name="SocialHistory"
        defaultValue="Repetitive motion or pressure, trauma, rheumatoid arthritis."
      />
      <br />
      <label htmlFor="SystemsSurvey">SystemsSurvey: </label>
      <input
        type="text"
        name="SystemsSurvey"
        defaultValue="Inflammation of the bursa, a small fluid-filled sac that cushions the bones, tendons, and muscles near joints."
      />
      <br />
      <label htmlFor="Vitals">Vitals: </label>
      <input
        type="text"
        name="Vitals"
        defaultValue="BP 120/80, HR 72, Temp 37°C"
      />
      <br />
      <label htmlFor="PhysicalExam">PhysicalExam: </label>
      <input
        type="text"
        name="PhysicalExam"
        defaultValue="Swelling, warmth, and redness over the joint."
      />
      <br />
      <label htmlFor="Impression">Impression: </label>
      <input type="text" name="Impression" defaultValue="Bursitis" />
      <br />
      <label htmlFor="DifferentialDiagnosis">DifferentialDiagnosis: </label>
      <input
        type="text"
        name="DifferentialDiagnosis"
        defaultValue="Tendinitis, arthritis"
      />
      <br />
      <label htmlFor="Allergies">Allergies: </label>
      <input type="text" name="Allergies" defaultValue="None" />
      <br />
      <label htmlFor="Pregnancy">Pregnancy: </label>
      <input
        type="text"
        name="Pregnancy"
        defaultValue="Avoid activities that aggravate the condition"
      />
      <br />
      <label htmlFor="Treatment">Treatment: </label>
      <input
        type="text"
        name="Treatment"
        defaultValue="Ice, NSAIDs, corticosteroid injections"
      />
      <br />
      <label htmlFor="CarePlan">CarePlan: </label>
      <input
        type="text"
        name="CarePlan"
        defaultValue="Protective padding, physical therapy"
      />
      <br />
      <label htmlFor="Accurex">Accurex: </label>
      <input type="text" name="Accurex" defaultValue="N/A" />
      <br />
    </fieldset>
    <br />
    <fieldset>
      <legend>Plantar Fasciitis</legend>
      <label htmlFor="ConditionID">ConditionID: </label>
      <input type="text" name="ConditionID" defaultValue="M7" />
      <br />
      <label htmlFor="ConditionName">ConditionName: </label>
      <input
        type="text"
        name="ConditionName"
        defaultValue="Plantar Fasciitis"
      />
      <br />
      <label htmlFor="ChiefComplaint">ChiefComplaint: </label>
      <input
        type="text"
        name="ChiefComplaint"
        defaultValue="Sharp heel pain, particularly with the first steps in the morning."
      />
      <br />
      <label htmlFor="SocialHistory">SocialHistory: </label>
      <input
        type="text"
        name="SocialHistory"
        defaultValue="Overuse, obesity, foot arch problems."
      />
      <br />
      <label htmlFor="SystemsSurvey">SystemsSurvey: </label>
      <input
        type="text"
        name="SystemsSurvey"
        defaultValue="Inflammation of the plantar fascia on the bottom of the foot."
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
        defaultValue="Tenderness on the bottom of the foot near the heel."
      />
      <br />
      <label htmlFor="Impression">Impression: </label>
      <input type="text" name="Impression" defaultValue="Plantar Fasciitis" />
      <br />
      <label htmlFor="DifferentialDiagnosis">DifferentialDiagnosis: </label>
      <input
        type="text"
        name="DifferentialDiagnosis"
        defaultValue="Heel spurs, Achilles tendinitis"
      />
      <br />
      <label htmlFor="Allergies">Allergies: </label>
      <input type="text" name="Allergies" defaultValue="None" />
      <br />
      <label htmlFor="Pregnancy">Pregnancy: </label>
      <input
        type="text"
        name="Pregnancy"
        defaultValue="Rest, ice, stretching exercises"
      />
      <br />
      <label htmlFor="Treatment">Treatment: </label>
      <input
        type="text"
        name="Treatment"
        defaultValue="Stretching exercises, orthotic devices, physical therapy"
      />
      <br />
      <label htmlFor="CarePlan">CarePlan: </label>
      <input
        type="text"
        name="CarePlan"
        defaultValue="Weight loss if overweight, supportive shoes"
      />
      <br />
      <label htmlFor="Accurex">Accurex: </label>
      <input type="text" name="Accurex" defaultValue="N/A" />
      <br />
    </fieldset>
    <br />
    <fieldset>
      <legend>Scoliosis</legend>
      <label htmlFor="ConditionID">ConditionID: </label>
      <input type="text" name="ConditionID" defaultValue="M8" />
      <br />
      <label htmlFor="ConditionName">ConditionName: </label>
      <input type="text" name="ConditionName" defaultValue="Scoliosis" />
      <br />
      <label htmlFor="ChiefComplaint">ChiefComplaint: </label>
      <input
        type="text"
        name="ChiefComplaint"
        defaultValue="Visible curvature of the spine, uneven shoulders or waist, one hip higher than the other."
      />
      <br />
      <label htmlFor="SocialHistory">SocialHistory: </label>
      <input
        type="text"
        name="SocialHistory"
        defaultValue="Genetic predisposition, idiopathic in most cases."
      />
      <br />
      <label htmlFor="SystemsSurvey">SystemsSurvey: </label>
      <input
        type="text"
        name="SystemsSurvey"
        defaultValue="A lateral curvature of the spine."
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
        defaultValue="Asymmetry in trunk and shoulders on examination."
      />
      <br />
      <label htmlFor="Impression">Impression: </label>
      <input type="text" name="Impression" defaultValue="Scoliosis" />
      <br />
      <label htmlFor="DifferentialDiagnosis">DifferentialDiagnosis: </label>
      <input
        type="text"
        name="DifferentialDiagnosis"
        defaultValue="Muscular dystrophy, spinal tumours"
      />
      <br />
      <label htmlFor="Allergies">Allergies: </label>
      <input type="text" name="Allergies" defaultValue="None" />
      <br />
      <label htmlFor="Pregnancy">Pregnancy: </label>
      <input
        type="text"
        name="Pregnancy"
        defaultValue="Observation in mild cases"
      />
      <br />
      <label htmlFor="Treatment">Treatment: </label>
      <input
        type="text"
        name="Treatment"
        defaultValue="Bracing in adolescents, surgery for severe curves"
      />
      <br />
      <label htmlFor="CarePlan">CarePlan: </label>
      <input
        type="text"
        name="CarePlan"
        defaultValue="Physical therapy, monitoring for progression"
      />
      <br />
      <label htmlFor="Accurex">Accurex: </label>
      <input type="text" name="Accurex" defaultValue="N/A" />
      <br />
    </fieldset>
    <br />
    <fieldset>
      <legend>Lumbar Disc Herniation</legend>
      <label htmlFor="ConditionID">ConditionID: </label>
      <input type="text" name="ConditionID" defaultValue="M9" />
      <br />
      <label htmlFor="ConditionName">ConditionName: </label>
      <input
        type="text"
        name="ConditionName"
        defaultValue="Lumbar Disc Herniation"
      />
      <br />
      <label htmlFor="ChiefComplaint">ChiefComplaint: </label>
      <input
        type="text"
        name="ChiefComplaint"
        defaultValue="Lower back pain radiating to the leg, numbness or weakness in leg or foot."
      />
      <br />
      <label htmlFor="SocialHistory">SocialHistory: </label>
      <input
        type="text"
        name="SocialHistory"
        defaultValue="Heavy lifting, sudden movement, or aging."
      />
      <br />
      <label htmlFor="SystemsSurvey">SystemsSurvey: </label>
      <input
        type="text"
        name="SystemsSurvey"
        defaultValue="Displacement of disc material beyond the intervertebral disc space."
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
        defaultValue="Positive straight leg raise test, decreased reflexes."
      />
      <br />
      <label htmlFor="Impression">Impression: </label>
      <input
        type="text"
        name="Impression"
        defaultValue="Lumbar Disc Herniation"
      />
      <br />
      <label htmlFor="DifferentialDiagnosis">DifferentialDiagnosis: </label>
      <input
        type="text"
        name="DifferentialDiagnosis"
        defaultValue="Sciatica, spinal stenosis"
      />
      <br />
      <label htmlFor="Allergies">Allergies: </label>
      <input type="text" name="Allergies" defaultValue="None" />
      <br />
      <label htmlFor="Pregnancy">Pregnancy: </label>
      <input
        type="text"
        name="Pregnancy"
        defaultValue="Pain management and physical therapy"
      />
      <br />
      <label htmlFor="Treatment">Treatment: </label>
      <input
        type="text"
        name="Treatment"
        defaultValue="NSAIDs, physical therapy, epidural steroid injections, surgery if necessary"
      />
      <br />
      <label htmlFor="CarePlan">CarePlan: </label>
      <input
        type="text"
        name="CarePlan"
        defaultValue="Lifestyle modifications, ergonomic adjustments"
      />
      <br />
      <label htmlFor="Accurex">Accurex: </label>
      <input type="text" name="Accurex" defaultValue="N/A" />
      <br />
    </fieldset>
    <br />
    <fieldset>
      <legend>Paget Disease of Bone</legend>
      <label htmlFor="ConditionID">ConditionID: </label>
      <input type="text" name="ConditionID" defaultValue="M10" />
      <br />
      <label htmlFor="ConditionName">ConditionName: </label>
      <input
        type="text"
        name="ConditionName"
        defaultValue="Paget Disease of Bone"
      />
      <br />
      <label htmlFor="ChiefComplaint">ChiefComplaint: </label>
      <input
        type="text"
        name="ChiefComplaint"
        defaultValue="Bone pain, joint pain and stiffness, enlarged or misshapen bones."
      />
      <br />
      <label htmlFor="SocialHistory">SocialHistory: </label>
      <input
        type="text"
        name="SocialHistory"
        defaultValue="Genetic factors, environmental triggers."
      />
      <br />
      <label htmlFor="SystemsSurvey">SystemsSurvey: </label>
      <input
        type="text"
        name="SystemsSurvey"
        defaultValue="A disorder of bone remodelling that leads to enlarged and weakened bones."
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
        defaultValue="Enlarged skull, bowed limbs, or warm skin over affected bones."
      />
      <br />
      <label htmlFor="Impression">Impression: </label>
      <input
        type="text"
        name="Impression"
        defaultValue="Paget Disease of Bone"
      />
      <br />
      <label htmlFor="DifferentialDiagnosis">DifferentialDiagnosis: </label>
      <input
        type="text"
        name="DifferentialDiagnosis"
        defaultValue="Osteoarthritis, osteoporosis"
      />
      <br />
      <label htmlFor="Allergies">Allergies: </label>
      <input type="text" name="Allergies" defaultValue="None" />
      <br />
      <label htmlFor="Pregnancy">Pregnancy: </label>
      <input
        type="text"
        name="Pregnancy"
        defaultValue="Bisphosphonates to slow bone turnover"
      />
      <br />
      <label htmlFor="Treatment">Treatment: </label>
      <input
        type="text"
        name="Treatment"
        defaultValue="Calcium and vitamin D supplements, bisphosphonates"
      />
      <br />
      <label htmlFor="CarePlan">CarePlan: </label>
      <input
        type="text"
        name="CarePlan"
        defaultValue="Regular monitoring of bone density and serum alkaline phosphatase levels"
      />
      <br />
      <label htmlFor="Accurex">Accurex: </label>
      <input type="text" name="Accurex" defaultValue="N/A" />
      <br />
    </fieldset>
    <br />
    <fieldset>
      <legend>Rotator Cuff Tendinitis</legend>
      <label htmlFor="ConditionID">ConditionID: </label>
      <input type="text" name="ConditionID" defaultValue="M11" />
      <br />
      <label htmlFor="ConditionName">ConditionName: </label>
      <input
        type="text"
        name="ConditionName"
        defaultValue="Rotator Cuff Tendinitis"
      />
      <br />
      <label htmlFor="ChiefComplaint">ChiefComplaint: </label>
      <input
        type="text"
        name="ChiefComplaint"
        defaultValue="Shoulder pain, especially with overhead activities, weakness in the shoulder."
      />
      <br />
      <label htmlFor="SocialHistory">SocialHistory: </label>
      <input
        type="text"
        name="SocialHistory"
        defaultValue="Repetitive use, aging, or injury."
      />
      <br />
      <label htmlFor="SystemsSurvey">SystemsSurvey: </label>
      <input
        type="text"
        name="SystemsSurvey"
        defaultValue="Inflammation of the rotator cuff tendons in the shoulder."
      />
      <br />
      <label htmlFor="Vitals">Vitals: </label>
      <input
        type="text"
        name="Vitals"
        defaultValue="BP 120/80, HR 72, Temp 37°C"
      />
      <br />
      <label htmlFor="PhysicalExam">PhysicalExam: </label>
      <input
        type="text"
        name="PhysicalExam"
        defaultValue="Pain on shoulder abduction, positive impingement signs."
      />
      <br />
      <label htmlFor="Impression">Impression: </label>
      <input
        type="text"
        name="Impression"
        defaultValue="Rotator Cuff Tendinitis"
      />
      <br />
      <label htmlFor="DifferentialDiagnosis">DifferentialDiagnosis: </label>
      <input
        type="text"
        name="DifferentialDiagnosis"
        defaultValue="Frozen shoulder, rotator cuff tear"
      />
      <br />
      <label htmlFor="Allergies">Allergies: </label>
      <input type="text" name="Allergies" defaultValue="None" />
      <br />
      <label htmlFor="Pregnancy">Pregnancy: </label>
      <input
        type="text"
        name="Pregnancy"
        defaultValue="Rest, ice, and physical therapy"
      />
      <br />
      <label htmlFor="Treatment">Treatment: </label>
      <input
        type="text"
        name="Treatment"
        defaultValue="NSAIDs, corticosteroid injections, physical therapy"
      />
      <br />
      <label htmlFor="CarePlan">CarePlan: </label>
      <input
        type="text"
        name="CarePlan"
        defaultValue="Strengthening exercises, avoid aggravating activities"
      />
      <br />
      <label htmlFor="Accurex">Accurex: </label>
      <input type="text" name="Accurex" defaultValue="N/A" />
      <br />
    </fieldset>
    <br />
    <fieldset>
      <legend>Frozen Shoulder</legend>
      <label htmlFor="ConditionID">ConditionID: </label>
      <input type="text" name="ConditionID" defaultValue="M12" />
      <br />
      <label htmlFor="ConditionName">ConditionName: </label>
      <input type="text" name="ConditionName" defaultValue="Frozen Shoulder" />
      <br />
      <label htmlFor="ChiefComplaint">ChiefComplaint: </label>
      <input
        type="text"
        name="ChiefComplaint"
        defaultValue="Progressive shoulder stiffness and pain, limited range of motion."
      />
      <br />
      <label htmlFor="SocialHistory">SocialHistory: </label>
      <input
        type="text"
        name="SocialHistory"
        defaultValue="Often follows an injury or period of immobilisation."
      />
      <br />
      <label htmlFor="SystemsSurvey">SystemsSurvey: </label>
      <input
        type="text"
        name="SystemsSurvey"
        defaultValue="Characterised by thickening and tightening of the shoulder capsule."
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
        defaultValue="Limited shoulder movements in all directions."
      />
      <br />
      <label htmlFor="Impression">Impression: </label>
      <input type="text" name="Impression" defaultValue="Frozen Shoulder" />
      <br />
      <label htmlFor="DifferentialDiagnosis">DifferentialDiagnosis: </label>
      <input
        type="text"
        name="DifferentialDiagnosis"
        defaultValue="Rotator cuff tendinitis, arthritis"
      />
      <br />
      <label htmlFor="Allergies">Allergies: </label>
      <input type="text" name="Allergies" defaultValue="None" />
      <br />
      <label htmlFor="Pregnancy">Pregnancy: </label>
      <input
        type="text"
        name="Pregnancy"
        defaultValue="Pain management and physical therapy"
      />
      <br />
      <label htmlFor="Treatment">Treatment: </label>
      <input
        type="text"
        name="Treatment"
        defaultValue="Corticosteroid injections, shoulder distension, manipulation under anaesthesia"
      />
      <br />
      <label htmlFor="CarePlan">CarePlan: </label>
      <input
        type="text"
        name="CarePlan"
        defaultValue="Physical therapy focused on stretching, gradual mobilisation exercises"
      />
      <br />
      <label htmlFor="Accurex">Accurex: </label>
      <input type="text" name="Accurex" defaultValue="N/A" />
      <br />
    </fieldset>
    <br />
    <fieldset>
      <legend>Achilles Tendinitis</legend>
      <label htmlFor="ConditionID">ConditionID: </label>
      <input type="text" name="ConditionID" defaultValue="M13" />
      <br />
      <label htmlFor="ConditionName">ConditionName: </label>
      <input
        type="text"
        name="ConditionName"
        defaultValue="Achilles Tendinitis"
      />
      <br />
      <label htmlFor="ChiefComplaint">ChiefComplaint: </label>
      <input
        type="text"
        name="ChiefComplaint"
        defaultValue="Pain and stiffness along the Achilles tendon, particularly in the morning."
      />
      <br />
      <label htmlFor="SocialHistory">SocialHistory: </label>
      <input
        type="text"
        name="SocialHistory"
        defaultValue="Running and other forms of exercise, tight calf muscles."
      />
      <br />
      <label htmlFor="SystemsSurvey">SystemsSurvey: </label>
      <input
        type="text"
        name="SystemsSurvey"
        defaultValue="Inflammation of the Achilles tendon."
      />
      <br />
      <label htmlFor="Vitals">Vitals: </label>
      <input
        type="text"
        name="Vitals"
        defaultValue="BP 120/80, HR 72, Temp 37°C"
      />
      <br />
      <label htmlFor="PhysicalExam">PhysicalExam: </label>
      <input
        type="text"
        name="PhysicalExam"
        defaultValue="Tenderness and swelling near the heel."
      />
      <br />
      <label htmlFor="Impression">Impression: </label>
      <input type="text" name="Impression" defaultValue="Achilles Tendinitis" />
      <br />
      <label htmlFor="DifferentialDiagnosis">DifferentialDiagnosis: </label>
      <input
        type="text"
        name="DifferentialDiagnosis"
        defaultValue="Achilles tendon rupture, plantar fasciitis"
      />
      <br />
      <label htmlFor="Allergies">Allergies: </label>
      <input type="text" name="Allergies" defaultValue="None" />
      <br />
      <label htmlFor="Pregnancy">Pregnancy: </label>
      <input type="text" name="Pregnancy" defaultValue="Rest and ice" />
      <br />
      <label htmlFor="Treatment">Treatment: </label>
      <input
        type="text"
        name="Treatment"
        defaultValue="NSAIDs, physical therapy, heel lifts"
      />
      <br />
      <label htmlFor="CarePlan">CarePlan: </label>
      <input
        type="text"
        name="CarePlan"
        defaultValue="Eccentric strengthening exercises, avoid overuse"
      />
      <br />
      <label htmlFor="Accurex">Accurex: </label>
      <input type="text" name="Accurex" defaultValue="N/A" />
      <br />
    </fieldset>
    <br />
    <fieldset>
      <legend>Osteomyelitis</legend>
      <label htmlFor="ConditionID">ConditionID: </label>
      <input type="text" name="ConditionID" defaultValue="M14" />
      <br />
      <label htmlFor="ConditionName">ConditionName: </label>
      <input type="text" name="ConditionName" defaultValue="Osteomyelitis" />
      <br />
      <label htmlFor="ChiefComplaint">ChiefComplaint: </label>
      <input
        type="text"
        name="ChiefComplaint"
        defaultValue="Bone pain, fever, swelling, redness over the affected area."
      />
      <br />
      <label htmlFor="SocialHistory">SocialHistory: </label>
      <input
        type="text"
        name="SocialHistory"
        defaultValue="Bacterial infection, often following surgery or injury."
      />
      <br />
      <label htmlFor="SystemsSurvey">SystemsSurvey: </label>
      <input
        type="text"
        name="SystemsSurvey"
        defaultValue="Infection of the bone."
      />
      <br />
      <label htmlFor="Vitals">Vitals: </label>
      <input
        type="text"
        name="Vitals"
        defaultValue="BP 120/80, HR 80, Temp 38.5°C"
      />
      <br />
      <label htmlFor="PhysicalExam">PhysicalExam: </label>
      <input
        type="text"
        name="PhysicalExam"
        defaultValue="Localised tenderness and warmth over the involved bone."
      />
      <br />
      <label htmlFor="Impression">Impression: </label>
      <input type="text" name="Impression" defaultValue="Osteomyelitis" />
      <br />
      <label htmlFor="DifferentialDiagnosis">DifferentialDiagnosis: </label>
      <input
        type="text"
        name="DifferentialDiagnosis"
        defaultValue="Bone tumours, arthritis"
      />
      <br />
      <label htmlFor="Allergies">Allergies: </label>
      <input type="text" name="Allergies" defaultValue="None" />
      <br />
      <label htmlFor="Pregnancy">Pregnancy: </label>
      <input
        type="text"
        name="Pregnancy"
        defaultValue="Antibiotics, possibly surgery"
      />
      <br />
      <label htmlFor="Treatment">Treatment: </label>
      <input
        type="text"
        name="Treatment"
        defaultValue="IV antibiotics, surgical debridement if necessary"
      />
      <br />
      <label htmlFor="CarePlan">CarePlan: </label>
      <input
        type="text"
        name="CarePlan"
        defaultValue="Monitor for signs of chronic infection, manage pain"
      />
      <br />
      <label htmlFor="Accurex">Accurex: </label>
      <input type="text" name="Accurex" defaultValue="N/A" />
      <br />
    </fieldset>
    <br />
    <fieldset>
      <legend>Meniscal Tears</legend>
      <label htmlFor="ConditionID">ConditionID: </label>
      <input type="text" name="ConditionID" defaultValue="M15" />
      <br />
      <label htmlFor="ConditionName">ConditionName: </label>
      <input type="text" name="ConditionName" defaultValue="Meniscal Tears" />
      <br />
      <label htmlFor="ChiefComplaint">ChiefComplaint: </label>
      <input
        type="text"
        name="ChiefComplaint"
        defaultValue="Knee pain, swelling, locking sensation in the knee, difficulty bending and straightening the leg."
      />
      <br />
      <label htmlFor="SocialHistory">SocialHistory: </label>
      <input
        type="text"
        name="SocialHistory"
        defaultValue="Common in athletes and individuals engaging in physical activities; can also occur from aging."
      />
      <br />
      <label htmlFor="SystemsSurvey">SystemsSurvey: </label>
      <input
        type="text"
        name="SystemsSurvey"
        defaultValue="A tear in one of the knees menisci, the cartilage that stabilises and cushions the knee joint."
      />
      <br />
      <label htmlFor="Vitals">Vitals: </label>
      <input
        type="text"
        name="Vitals"
        defaultValue="BP 120/80, HR 75, Temp 37°C"
      />
      <br />
      <label htmlFor="PhysicalExam">PhysicalExam: </label>
      <input
        type="text"
        name="PhysicalExam"
        defaultValue="Joint line tenderness, McMurray test positive."
      />
      <br />
      <label htmlFor="Impression">Impression: </label>
      <input type="text" name="Impression" defaultValue="Meniscal Tears" />
      <br />
      <label htmlFor="DifferentialDiagnosis">DifferentialDiagnosis: </label>
      <input
        type="text"
        name="DifferentialDiagnosis"
        defaultValue="ACL injury, patellar tendinitis"
      />
      <br />
      <label htmlFor="Allergies">Allergies: </label>
      <input type="text" name="Allergies" defaultValue="None" />
      <br />
      <label htmlFor="Pregnancy">Pregnancy: </label>
      <input
        type="text"
        name="Pregnancy"
        defaultValue="Activity modification, ice"
      />
      <br />
      <label htmlFor="Treatment">Treatment: </label>
      <input
        type="text"
        name="Treatment"
        defaultValue="Physical therapy, surgical repair or meniscectomy if necessary"
      />
      <br />
      <label htmlFor="CarePlan">CarePlan: </label>
      <input
        type="text"
        name="CarePlan"
        defaultValue="Rehabilitation exercises, knee support"
      />
      <br />
      <label htmlFor="Accurex">Accurex: </label>
      <input type="text" name="Accurex" defaultValue="N/A" />
      <br />
    </fieldset>
    <br />
    <fieldset>
      <legend>Patellar Tendinitis</legend>
      <label htmlFor="ConditionID">ConditionID: </label>
      <input type="text" name="ConditionID" defaultValue="M16" />
      <br />
      <label htmlFor="ConditionName">ConditionName: </label>
      <input
        type="text"
        name="ConditionName"
        defaultValue="Patellar Tendinitis"
      />
      <br />
      <label htmlFor="ChiefComplaint">ChiefComplaint: </label>
      <input
        type="text"
        name="ChiefComplaint"
        defaultValue="Pain at the front of the knee, exacerbated by jumping, running, or walking up stairs."
      />
      <br />
      <label htmlFor="SocialHistory">SocialHistory: </label>
      <input
        type="text"
        name="SocialHistory"
        defaultValue="Often seen in athletes involved in sports requiring frequent jumping."
      />
      <br />
      <label htmlFor="SystemsSurvey">SystemsSurvey: </label>
      <input
        type="text"
        name="SystemsSurvey"
        defaultValue="Inflammation of the patellar tendon, connecting the kneecap to the shinbone."
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
        defaultValue="Tenderness at the lower part of the kneecap, pain with knee extension."
      />
      <br />
      <label htmlFor="Impression">Impression: </label>
      <input type="text" name="Impression" defaultValue="Patellar Tendinitis" />
      <br />
      <label htmlFor="DifferentialDiagnosis">DifferentialDiagnosis: </label>
      <input
        type="text"
        name="DifferentialDiagnosis"
        defaultValue="Patellofemoral pain syndrome, Osgood-Schlatter disease"
      />
      <br />
      <label htmlFor="Allergies">Allergies: </label>
      <input type="text" name="Allergies" defaultValue="None" />
      <br />
      <label htmlFor="Pregnancy">Pregnancy: </label>
      <input
        type="text"
        name="Pregnancy"
        defaultValue="Rest, ice, and compression"
      />
      <br />
      <label htmlFor="Treatment">Treatment: </label>
      <input
        type="text"
        name="Treatment"
        defaultValue="Physical therapy, eccentric exercises, corticosteroid injections"
      />
      <br />
      <label htmlFor="CarePlan">CarePlan: </label>
      <input
        type="text"
        name="CarePlan"
        defaultValue="Strengthening and flexibility exercises, gradual return to activity"
      />
      <br />
      <label htmlFor="Accurex">Accurex: </label>
      <input type="text" name="Accurex" defaultValue="N/A" />
      <br />
    </fieldset>
    <br />
    <fieldset>
      <legend>Spinal Stenosis</legend>
      <label htmlFor="ConditionID">ConditionID: </label>
      <input type="text" name="ConditionID" defaultValue="M17" />
      <br />
      <label htmlFor="ConditionName">ConditionName: </label>
      <input type="text" name="ConditionName" defaultValue="Spinal Stenosis" />
      <br />
      <label htmlFor="ChiefComplaint">ChiefComplaint: </label>
      <input
        type="text"
        name="ChiefComplaint"
        defaultValue="Back pain, leg pain while walking or standing, relief with sitting; numbness, weakness, or tingling in the legs."
      />
      <br />
      <label htmlFor="SocialHistory">SocialHistory: </label>
      <input
        type="text"
        name="SocialHistory"
        defaultValue="Aging, degenerative changes; may be congenital."
      />
      <br />
      <label htmlFor="SystemsSurvey">SystemsSurvey: </label>
      <input
        type="text"
        name="SystemsSurvey"
        defaultValue="Narrowing of the spinal canal, compressing the spinal cord and nerves."
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
        defaultValue="Decreased lumbar range of motion, neurogenic claudication."
      />
      <br />
      <label htmlFor="Impression">Impression: </label>
      <input type="text" name="Impression" defaultValue="Spinal Stenosis" />
      <br />
      <label htmlFor="DifferentialDiagnosis">DifferentialDiagnosis: </label>
      <input
        type="text"
        name="DifferentialDiagnosis"
        defaultValue="Peripheral artery disease, lumbar disc herniation"
      />
      <br />
      <label htmlFor="Allergies">Allergies: </label>
      <input type="text" name="Allergies" defaultValue="None" />
      <br />
      <label htmlFor="Pregnancy">Pregnancy: </label>
      <input
        type="text"
        name="Pregnancy"
        defaultValue="Pain management, physical therapy"
      />
      <br />
      <label htmlFor="Treatment">Treatment: </label>
      <input
        type="text"
        name="Treatment"
        defaultValue="NSAIDs, epidural steroid injections, surgical decompression"
      />
      <br />
      <label htmlFor="CarePlan">CarePlan: </label>
      <input
        type="text"
        name="CarePlan"
        defaultValue="Exercise program, weight management"
      />
      <br />
      <label htmlFor="Accurex">Accurex: </label>
      <input type="text" name="Accurex" defaultValue="N/A" />
      <br />
    </fieldset>
    <br />
    <fieldset>
      <legend>Dupuytren Contracture</legend>
      <label htmlFor="ConditionID">ConditionID: </label>
      <input type="text" name="ConditionID" defaultValue="M18" />
      <br />
      <label htmlFor="ConditionName">ConditionName: </label>
      <input
        type="text"
        name="ConditionName"
        defaultValue="Dupuytren Contracture"
      />
      <br />
      <label htmlFor="ChiefComplaint">ChiefComplaint: </label>
      <input
        type="text"
        name="ChiefComplaint"
        defaultValue="Progressive thickening and tightening of the palmar fascia, leading to finger flexion contractures."
      />
      <br />
      <label htmlFor="SocialHistory">SocialHistory: </label>
      <input
        type="text"
        name="SocialHistory"
        defaultValue="Most common in males over 50 and those of Northern European descent."
      />
      <br />
      <label htmlFor="SystemsSurvey">SystemsSurvey: </label>
      <input
        type="text"
        name="SystemsSurvey"
        defaultValue="A connective tissue disorder affecting the hand."
      />
      <br />
      <label htmlFor="Vitals">Vitals: </label>
      <input
        type="text"
        name="Vitals"
        defaultValue="BP 120/80, HR 75, Temp 37°C"
      />
      <br />
      <label htmlFor="PhysicalExam">PhysicalExam: </label>
      <input
        type="text"
        name="PhysicalExam"
        defaultValue="Palpable nodules in the palm, flexed fingers that cannot be fully extended."
      />
      <br />
      <label htmlFor="Impression">Impression: </label>
      <input
        type="text"
        name="Impression"
        defaultValue="Dupuytren Contracture"
      />
      <br />
      <label htmlFor="DifferentialDiagnosis">DifferentialDiagnosis: </label>
      <input
        type="text"
        name="DifferentialDiagnosis"
        defaultValue="Trigger finger, arthritis"
      />
      <br />
      <label htmlFor="Allergies">Allergies: </label>
      <input type="text" name="Allergies" defaultValue="None" />
      <br />
      <label htmlFor="Pregnancy">Pregnancy: </label>
      <input
        type="text"
        name="Pregnancy"
        defaultValue="Minimally invasive techniques, stretching exercises"
      />
      <br />
      <label htmlFor="Treatment">Treatment: </label>
      <input
        type="text"
        name="Treatment"
        defaultValue="Collagenase injections, needle aponeurotomy, surgery"
      />
      <br />
      <label htmlFor="CarePlan">CarePlan: </label>
      <input
        type="text"
        name="CarePlan"
        defaultValue="Physical therapy post-intervention, use of night splints"
      />
      <br />
      <label htmlFor="Accurex">Accurex: </label>
      <input type="text" name="Accurex" defaultValue="N/A" />
      <br />
    </fieldset>
    <br />
    <fieldset>
      <legend>Sciatica</legend>
      <label htmlFor="ConditionID">ConditionID: </label>
      <input type="text" name="ConditionID" defaultValue="M19" />
      <br />
      <label htmlFor="ConditionName">ConditionName: </label>
      <input type="text" name="ConditionName" defaultValue="Sciatica" />
      <br />
      <label htmlFor="ChiefComplaint">ChiefComplaint: </label>
      <input
        type="text"
        name="ChiefComplaint"
        defaultValue="Lower back pain radiating down the leg, numbness, tingling, or weakness in the affected leg."
      />
      <br />
      <label htmlFor="SocialHistory">SocialHistory: </label>
      <input
        type="text"
        name="SocialHistory"
        defaultValue="Herniated disk, bone spur on the spine, or narrowing of the spine (spinal stenosis) compressing part of the sciatic nerve."
      />
      <br />
      <label htmlFor="SystemsSurvey">SystemsSurvey: </label>
      <input
        type="text"
        name="SystemsSurvey"
        defaultValue="Irritation or inflammation of the sciatic nerve."
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
        defaultValue="Pain that worsens with movement; loss of reflexes or muscle strength may be present."
      />
      <br />
      <label htmlFor="Impression">Impression: </label>
      <input type="text" name="Impression" defaultValue="Sciatica" />
      <br />
      <label htmlFor="DifferentialDiagnosis">DifferentialDiagnosis: </label>
      <input
        type="text"
        name="DifferentialDiagnosis"
        defaultValue="Lumbar radiculopathy, piriformis syndrome"
      />
      <br />
      <label htmlFor="Allergies">Allergies: </label>
      <input type="text" name="Allergies" defaultValue="None" />
      <br />
      <label htmlFor="Pregnancy">Pregnancy: </label>
      <input
        type="text"
        name="Pregnancy"
        defaultValue="Pain relief measures, physical therapy"
      />
      <br />
      <label htmlFor="Treatment">Treatment: </label>
      <input
        type="text"
        name="Treatment"
        defaultValue="NSAIDs, physical therapy, epidural steroid injections"
      />
      <br />
      <label htmlFor="CarePlan">CarePlan: </label>
      <input
        type="text"
        name="CarePlan"
        defaultValue="Exercise, proper posture, ergonomic adjustments at work"
      />
      <br />
      <label htmlFor="Accurex">Accurex: </label>
      <input type="text" name="Accurex" defaultValue="N/A" />
      <br />
    </fieldset>
    <br />
    <fieldset>
      <legend>Osteomalacia</legend>
      <label htmlFor="ConditionID">ConditionID: </label>
      <input type="text" name="ConditionID" defaultValue="M20" />
      <br />
      <label htmlFor="ConditionName">ConditionName: </label>
      <input type="text" name="ConditionName" defaultValue="Osteomalacia" />
      <br />
      <label htmlFor="ChiefComplaint">ChiefComplaint: </label>
      <input
        type="text"
        name="ChiefComplaint"
        defaultValue="Muscle weakness, bone pain, difficulty walking."
      />
      <br />
      <label htmlFor="SocialHistory">SocialHistory: </label>
      <input
        type="text"
        name="SocialHistory"
        defaultValue="Vitamin D deficiency, certain medical conditions affecting vitamin D metabolism."
      />
      <br />
      <label htmlFor="SystemsSurvey">SystemsSurvey: </label>
      <input
        type="text"
        name="SystemsSurvey"
        defaultValue="Softening of the bones due to impaired bone mineralization."
      />
      <br />
      <label htmlFor="Vitals">Vitals: </label>
      <input
        type="text"
        name="Vitals"
        defaultValue="BP 120/80, HR 72, Temp 37°C"
      />
      <br />
      <label htmlFor="PhysicalExam">PhysicalExam: </label>
      <input
        type="text"
        name="PhysicalExam"
        defaultValue="Bone tenderness, difficulty in rising from a squatting position."
      />
      <br />
      <label htmlFor="Impression">Impression: </label>
      <input type="text" name="Impression" defaultValue="Osteomalacia" />
      <br />
      <label htmlFor="DifferentialDiagnosis">DifferentialDiagnosis: </label>
      <input
        type="text"
        name="DifferentialDiagnosis"
        defaultValue="Osteoporosis, rheumatoid arthritis"
      />
      <br />
      <label htmlFor="Allergies">Allergies: </label>
      <input type="text" name="Allergies" defaultValue="None" />
      <br />
      <label htmlFor="Pregnancy">Pregnancy: </label>
      <input
        type="text"
        name="Pregnancy"
        defaultValue="Vitamin D and calcium supplementation"
      />
      <br />
      <label htmlFor="Treatment">Treatment: </label>
      <input
        type="text"
        name="Treatment"
        defaultValue="Correct underlying cause, supplementation with vitamin D and calcium"
      />
      <br />
      <label htmlFor="CarePlan">CarePlan: </label>
      <input
        type="text"
        name="CarePlan"
        defaultValue="Regular follow-up for monitoring vitamin D levels, dietary advice"
      />
      <br />
      <label htmlFor="Accurex">Accurex: </label>
      <input type="text" name="Accurex" defaultValue="N/A" />
      <br />
    </fieldset>
    <br />
    <fieldset>
      <legend>Polymyalgia Rheumatica</legend>
      <label htmlFor="ConditionID">ConditionID: </label>
      <input type="text" name="ConditionID" defaultValue="M21" />
      <br />
      <label htmlFor="ConditionName">ConditionName: </label>
      <input
        type="text"
        name="ConditionName"
        defaultValue="Polymyalgia Rheumatica"
      />
      <br />
      <label htmlFor="ChiefComplaint">ChiefComplaint: </label>
      <input
        type="text"
        name="ChiefComplaint"
        defaultValue="Muscle pain and stiffness, particularly in the shoulders and hips, fever, malaise."
      />
      <br />
      <label htmlFor="SocialHistory">SocialHistory: </label>
      <input
        type="text"
        name="SocialHistory"
        defaultValue="Unknown; may be related to immune system issues and genetic factors."
      />
      <br />
      <label htmlFor="SystemsSurvey">SystemsSurvey: </label>
      <input
        type="text"
        name="SystemsSurvey"
        defaultValue="An inflammatory disorder causing muscle pain and stiffness."
      />
      <br />
      <label htmlFor="Vitals">Vitals: </label>
      <input
        type="text"
        name="Vitals"
        defaultValue="BP 130/80, HR 80, Temp 38°C"
      />
      <br />
      <label htmlFor="PhysicalExam">PhysicalExam: </label>
      <input
        type="text"
        name="PhysicalExam"
        defaultValue="Pain and stiffness in the shoulders and pelvis, limited range of motion."
      />
      <br />
      <label htmlFor="Impression">Impression: </label>
      <input
        type="text"
        name="Impression"
        defaultValue="Polymyalgia Rheumatica"
      />
      <br />
      <label htmlFor="DifferentialDiagnosis">DifferentialDiagnosis: </label>
      <input
        type="text"
        name="DifferentialDiagnosis"
        defaultValue="Rheumatoid arthritis, fibromyalgia"
      />
      <br />
      <label htmlFor="Allergies">Allergies: </label>
      <input type="text" name="Allergies" defaultValue="None" />
      <br />
      <label htmlFor="Pregnancy">Pregnancy: </label>
      <input
        type="text"
        name="Pregnancy"
        defaultValue="Low-dose corticosteroids"
      />
      <br />
      <label htmlFor="Treatment">Treatment: </label>
      <input
        type="text"
        name="Treatment"
        defaultValue="Corticosteroids, regular monitoring for side effects"
      />
      <br />
      <label htmlFor="CarePlan">CarePlan: </label>
      <input
        type="text"
        name="CarePlan"
        defaultValue="Physical therapy, gradual increase in activity"
      />
      <br />
      <label htmlFor="Accurex">Accurex: </label>
      <input type="text" name="Accurex" defaultValue="N/A" />
      <br />
    </fieldset>
    <br />
    <fieldset>
      <legend>Spondylolisthesis</legend>
      <label htmlFor="ConditionID">ConditionID: </label>
      <input type="text" name="ConditionID" defaultValue="M22" />
      <br />
      <label htmlFor="ConditionName">ConditionName: </label>
      <input
        type="text"
        name="ConditionName"
        defaultValue="Spondylolisthesis"
      />
      <br />
      <label htmlFor="ChiefComplaint">ChiefComplaint: </label>
      <input
        type="text"
        name="ChiefComplaint"
        defaultValue="Lower back pain, leg pain, numbness or weakness in the legs, difficulty walking."
      />
      <br />
      <label htmlFor="SocialHistory">SocialHistory: </label>
      <input
        type="text"
        name="SocialHistory"
        defaultValue="Can result from congenital structural issues, degenerative changes, or trauma."
      />
      <br />
      <label htmlFor="SystemsSurvey">SystemsSurvey: </label>
      <input
        type="text"
        name="SystemsSurvey"
        defaultValue="Slippage of one vertebral body over another, often leading to spinal nerve compression."
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
        defaultValue="Lower lumbar tenderness, decreased range of motion, neurological deficits in severe cases."
      />
      <br />
      <label htmlFor="Impression">Impression: </label>
      <input type="text" name="Impression" defaultValue="Spondylolisthesis" />
      <br />
      <label htmlFor="DifferentialDiagnosis">DifferentialDiagnosis: </label>
      <input
        type="text"
        name="DifferentialDiagnosis"
        defaultValue="Spinal stenosis, herniated disc"
      />
      <br />
      <label htmlFor="Allergies">Allergies: </label>
      <input type="text" name="Allergies" defaultValue="None" />
      <br />
      <label htmlFor="Pregnancy">Pregnancy: </label>
      <input
        type="text"
        name="Pregnancy"
        defaultValue="Physical therapy and pain management"
      />
      <br />
      <label htmlFor="Treatment">Treatment: </label>
      <input
        type="text"
        name="Treatment"
        defaultValue="NSAIDs, physical therapy, surgery in severe cases"
      />
      <br />
      <label htmlFor="CarePlan">CarePlan: </label>
      <input
        type="text"
        name="CarePlan"
        defaultValue="Core strengthening exercises, activity modification"
      />
      <br />
      <label htmlFor="Accurex">Accurex: </label>
      <input type="text" name="Accurex" defaultValue="N/A" />
      <br />
    </fieldset>
    <br />
    <fieldset>
      <legend>Morton Neuroma</legend>
      <label htmlFor="ConditionID">ConditionID: </label>
      <input type="text" name="ConditionID" defaultValue="M23" />
      <br />
      <label htmlFor="ConditionName">ConditionName: </label>
      <input type="text" name="ConditionName" defaultValue="Morton Neuroma" />
      <br />
      <label htmlFor="ChiefComplaint">ChiefComplaint: </label>
      <input
        type="text"
        name="ChiefComplaint"
        defaultValue="Sharp, burning pain in the ball of the foot. Tingling or numbness in the toes."
      />
      <br />
      <label htmlFor="SocialHistory">SocialHistory: </label>
      <input
        type="text"
        name="SocialHistory"
        defaultValue="Tight footwear, high-impact athletic activities."
      />
      <br />
      <label htmlFor="SystemsSurvey">SystemsSurvey: </label>
      <input
        type="text"
        name="SystemsSurvey"
        defaultValue="Thickening of the tissue around one of the nerves leading to the toes."
      />
      <br />
      <label htmlFor="Vitals">Vitals: </label>
      <input
        type="text"
        name="Vitals"
        defaultValue="BP 120/80, HR 72, Temp 37°C"
      />
      <br />
      <label htmlFor="PhysicalExam">PhysicalExam: </label>
      <input
        type="text"
        name="PhysicalExam"
        defaultValue="Tenderness on palpation between the toes, positive Mulders sign."
      />
      <br />
      <label htmlFor="Impression">Impression: </label>
      <input type="text" name="Impression" defaultValue="Morton Neuroma" />
      <br />
      <label htmlFor="DifferentialDiagnosis">DifferentialDiagnosis: </label>
      <input
        type="text"
        name="DifferentialDiagnosis"
        defaultValue="Metatarsalgia, stress fracture"
      />
      <br />
      <label htmlFor="Allergies">Allergies: </label>
      <input type="text" name="Allergies" defaultValue="None" />
      <br />
      <label htmlFor="Pregnancy">Pregnancy: </label>
      <input
        type="text"
        name="Pregnancy"
        defaultValue="Changing footwear, reducing activities that put pressure on the feet"
      />
      <br />
      <label htmlFor="Treatment">Treatment: </label>
      <input
        type="text"
        name="Treatment"
        defaultValue="Steroid injections, orthotic devices, surgery in severe cases"
      />
      <br />
      <label htmlFor="CarePlan">CarePlan: </label>
      <input
        type="text"
        name="CarePlan"
        defaultValue="Footwear adjustments, physiotherapy"
      />
      <br />
      <label htmlFor="Accurex">Accurex: </label>
      <input type="text" name="Accurex" defaultValue="N/A" />
      <br />
    </fieldset>
    <br />
    <fieldset>
      <legend>Kyphosis</legend>
      <label htmlFor="ConditionID">ConditionID: </label>
      <input type="text" name="ConditionID" defaultValue="M24" />
      <br />
      <label htmlFor="ConditionName">ConditionName: </label>
      <input type="text" name="ConditionName" defaultValue="Kyphosis" />
      <br />
      <label htmlFor="ChiefComplaint">ChiefComplaint: </label>
      <input
        type="text"
        name="ChiefComplaint"
        defaultValue="Forward rounding of the back, back pain, stiffness, and in severe cases, breathing difficulties."
      />
      <br />
      <label htmlFor="SocialHistory">SocialHistory: </label>
      <input
        type="text"
        name="SocialHistory"
        defaultValue="Poor posture, spinal osteoporosis, congenital conditions."
      />
      <br />
      <label htmlFor="SystemsSurvey">SystemsSurvey: </label>
      <input
        type="text"
        name="SystemsSurvey"
        defaultValue="A spinal curvature that causes a hunched or rounded back."
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
        defaultValue="Visible curvature of the upper back, tight hamstrings."
      />
      <br />
      <label htmlFor="Impression">Impression: </label>
      <input type="text" name="Impression" defaultValue="Kyphosis" />
      <br />
      <label htmlFor="DifferentialDiagnosis">DifferentialDiagnosis: </label>
      <input
        type="text"
        name="DifferentialDiagnosis"
        defaultValue="Scoliosis, osteoporosis"
      />
      <br />
      <label htmlFor="Allergies">Allergies: </label>
      <input type="text" name="Allergies" defaultValue="None" />
      <br />
      <label htmlFor="Pregnancy">Pregnancy: </label>
      <input
        type="text"
        name="Pregnancy"
        defaultValue="Physical therapy to improve posture and strengthen muscles"
      />
      <br />
      <label htmlFor="Treatment">Treatment: </label>
      <input
        type="text"
        name="Treatment"
        defaultValue="Bracing in adolescents, surgery for severe curvature"
      />
      <br />
      <label htmlFor="CarePlan">CarePlan: </label>
      <input
        type="text"
        name="CarePlan"
        defaultValue="Posture education, regular exercise to strengthen back muscles"
      />
      <br />
      <label htmlFor="Accurex">Accurex: </label>
      <input type="text" name="Accurex" defaultValue="N/A" />
      <br />
    </fieldset>
    <br />
    <fieldset>
      <legend>Elbow Epicondylitis</legend>
      <label htmlFor="ConditionID">ConditionID: </label>
      <input type="text" name="ConditionID" defaultValue="M25" />
      <br />
      <label htmlFor="ConditionName">ConditionName: </label>
      <input
        type="text"
        name="ConditionName"
        defaultValue="Elbow Epicondylitis"
      />
      <br />
      <label htmlFor="ChiefComplaint">ChiefComplaint: </label>
      <input
        type="text"
        name="ChiefComplaint"
        defaultValue="Pain on the outside (lateral) or inside (medial) of the elbow, worsened with gripping or lifting."
      />
      <br />
      <label htmlFor="SocialHistory">SocialHistory: </label>
      <input
        type="text"
        name="SocialHistory"
        defaultValue="Overuse from repetitive arm, wrist, or hand movements."
      />
      <br />
      <label htmlFor="SystemsSurvey">SystemsSurvey: </label>
      <input
        type="text"
        name="SystemsSurvey"
        defaultValue="Inflammation of the tendons that attach to the elbows epicondyles."
      />
      <br />
      <label htmlFor="Vitals">Vitals: </label>
      <input
        type="text"
        name="Vitals"
        defaultValue="BP 120/80, HR 72, Temp 37°C"
      />
      <br />
      <label htmlFor="PhysicalExam">PhysicalExam: </label>
      <input
        type="text"
        name="PhysicalExam"
        defaultValue="Tenderness over the lateral or medial epicondyle, pain with wrist movements."
      />
      <br />
      <label htmlFor="Impression">Impression: </label>
      <input type="text" name="Impression" defaultValue="Elbow Epicondylitis" />
      <br />
      <label htmlFor="DifferentialDiagnosis">DifferentialDiagnosis: </label>
      <input
        type="text"
        name="DifferentialDiagnosis"
        defaultValue="Elbow arthritis, radial tunnel syndrome"
      />
      <br />
      <label htmlFor="Allergies">Allergies: </label>
      <input type="text" name="Allergies" defaultValue="None" />
      <br />
      <label htmlFor="Pregnancy">Pregnancy: </label>
      <input
        type="text"
        name="Pregnancy"
        defaultValue="Rest, ice, and activity modification"
      />
      <br />
      <label htmlFor="Treatment">Treatment: </label>
      <input
        type="text"
        name="Treatment"
        defaultValue="NSAIDs, physical therapy, corticosteroid injections"
      />
      <br />
      <label htmlFor="CarePlan">CarePlan: </label>
      <input
        type="text"
        name="CarePlan"
        defaultValue="Strengthening and stretching exercises, ergonomic adjustments"
      />
      <br />
      <label htmlFor="Accurex">Accurex: </label>
      <input type="text" name="Accurex" defaultValue="N/A" />
      <br />
    </fieldset>
    <br />
    <fieldset>
      <legend>De Quervain Tenosynovitis</legend>
      <label htmlFor="ConditionID">ConditionID: </label>
      <input type="text" name="ConditionID" defaultValue="M26" />
      <br />
      <label htmlFor="ConditionName">ConditionName: </label>
      <input
        type="text"
        name="ConditionName"
        defaultValue="De Quervain Tenosynovitis"
      />
      <br />
      <label htmlFor="ChiefComplaint">ChiefComplaint: </label>
      <input
        type="text"
        name="ChiefComplaint"
        defaultValue="Pain at the base of the thumb, extending into the thumb and wrist when moving it."
      />
      <br />
      <label htmlFor="SocialHistory">SocialHistory: </label>
      <input
        type="text"
        name="SocialHistory"
        defaultValue="Repetitive thumb movements, pregnancy, rheumatologic diseases."
      />
      <br />
      <label htmlFor="SystemsSurvey">SystemsSurvey: </label>
      <input
        type="text"
        name="SystemsSurvey"
        defaultValue="Inflammation of the sheaths of the thumb tendons."
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
        defaultValue="Pain and swelling over the radial side of the wrist, positive Finkelsteins test."
      />
      <br />
      <label htmlFor="Impression">Impression: </label>
      <input
        type="text"
        name="Impression"
        defaultValue="De Quervain Tenosynovitis"
      />
      <br />
      <label htmlFor="DifferentialDiagnosis">DifferentialDiagnosis: </label>
      <input
        type="text"
        name="DifferentialDiagnosis"
        defaultValue="Thumb arthritis, carpal tunnel syndrome"
      />
      <br />
      <label htmlFor="Allergies">Allergies: </label>
      <input type="text" name="Allergies" defaultValue="None" />
      <br />
      <label htmlFor="Pregnancy">Pregnancy: </label>
      <input
        type="text"
        name="Pregnancy"
        defaultValue="Thumb spica splint, activity modification"
      />
      <br />
      <label htmlFor="Treatment">Treatment: </label>
      <input
        type="text"
        name="Treatment"
        defaultValue="NSAIDs, corticosteroid injections, surgery in refractory cases"
      />
      <br />
      <label htmlFor="CarePlan">CarePlan: </label>
      <input
        type="text"
        name="CarePlan"
        defaultValue="Ergonomic adjustments, physical therapy"
      />
      <br />
      <label htmlFor="Accurex">Accurex: </label>
      <input type="text" name="Accurex" defaultValue="N/A" />
      <br />
    </fieldset>
    <br />
    <fieldset>
      <legend>Hallux Valgus</legend>
      <label htmlFor="ConditionID">ConditionID: </label>
      <input type="text" name="ConditionID" defaultValue="M27" />
      <br />
      <label htmlFor="ConditionName">ConditionName: </label>
      <input type="text" name="ConditionName" defaultValue="Hallux Valgus" />
      <br />
      <label htmlFor="ChiefComplaint">ChiefComplaint: </label>
      <input
        type="text"
        name="ChiefComplaint"
        defaultValue="Pain and prominence at the base of the big toe, difficulty with footwear."
      />
      <br />
      <label htmlFor="SocialHistory">SocialHistory: </label>
      <input
        type="text"
        name="SocialHistory"
        defaultValue="Genetic predisposition, tight or poorly fitting shoes."
      />
      <br />
      <label htmlFor="SystemsSurvey">SystemsSurvey: </label>
      <input
        type="text"
        name="SystemsSurvey"
        defaultValue="A lateral deviation of the big toe, leading to bunion formation."
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
        defaultValue="Visible bony prominence, redness, and swelling at the first metatarsophalangeal joint."
      />
      <br />
      <label htmlFor="Impression">Impression: </label>
      <input type="text" name="Impression" defaultValue="Hallux Valgus" />
      <br />
      <label htmlFor="DifferentialDiagnosis">DifferentialDiagnosis: </label>
      <input
        type="text"
        name="DifferentialDiagnosis"
        defaultValue="Arthritis of the big toe, gout"
      />
      <br />
      <label htmlFor="Allergies">Allergies: </label>
      <input type="text" name="Allergies" defaultValue="None" />
      <br />
      <label htmlFor="Pregnancy">Pregnancy: </label>
      <input
        type="text"
        name="Pregnancy"
        defaultValue="Wider shoes, padding, orthotics"
      />
      <br />
      <label htmlFor="Treatment">Treatment: </label>
      <input
        type="text"
        name="Treatment"
        defaultValue="Conservative measures, surgical correction for severe cases"
      />
      <br />
      <label htmlFor="CarePlan">CarePlan: </label>
      <input
        type="text"
        name="CarePlan"
        defaultValue="Footwear modification, physiotherapy for toe mobility"
      />
      <br />
      <label htmlFor="Accurex">Accurex: </label>
      <input type="text" name="Accurex" defaultValue="N/A" />
      <br />
    </fieldset>
    <br />
    <fieldset>
      <legend>Ganglion Cysts</legend>
      <label htmlFor="ConditionID">ConditionID: </label>
      <input type="text" name="ConditionID" defaultValue="M28" />
      <br />
      <label htmlFor="ConditionName">ConditionName: </label>
      <input type="text" name="ConditionName" defaultValue="Ganglion Cysts" />
      <br />
      <label htmlFor="ChiefComplaint">ChiefComplaint: </label>
      <input
        type="text"
        name="ChiefComplaint"
        defaultValue="Visible lump on the wrist or hand, which may or may not be painful."
      />
      <br />
      <label htmlFor="SocialHistory">SocialHistory: </label>
      <input
        type="text"
        name="SocialHistory"
        defaultValue="Aetiology is unknown; associated with joint or tendon irritation."
      />
      <br />
      <label htmlFor="SystemsSurvey">SystemsSurvey: </label>
      <input
        type="text"
        name="SystemsSurvey"
        defaultValue="A fluid-filled cyst that develops near joints or tendons."
      />
      <br />
      <label htmlFor="Vitals">Vitals: </label>
      <input
        type="text"
        name="Vitals"
        defaultValue="BP 120/80, HR 72, Temp 37°C"
      />
      <br />
      <label htmlFor="PhysicalExam">PhysicalExam: </label>
      <input
        type="text"
        name="PhysicalExam"
        defaultValue="Round, smooth, firm lump, transillumination positive."
      />
      <br />
      <label htmlFor="Impression">Impression: </label>
      <input type="text" name="Impression" defaultValue="Ganglion Cysts" />
      <br />
      <label htmlFor="DifferentialDiagnosis">DifferentialDiagnosis: </label>
      <input
        type="text"
        name="DifferentialDiagnosis"
        defaultValue="Tumour, bone spur"
      />
      <br />
      <label htmlFor="Allergies">Allergies: </label>
      <input type="text" name="Allergies" defaultValue="None" />
      <br />
      <label htmlFor="Pregnancy">Pregnancy: </label>
      <input
        type="text"
        name="Pregnancy"
        defaultValue="Observation, wrist splint for discomfort"
      />
      <br />
      <label htmlFor="Treatment">Treatment: </label>
      <input
        type="text"
        name="Treatment"
        defaultValue="Aspiration, surgical removal for persistent or symptomatic cysts"
      />
      <br />
      <label htmlFor="CarePlan">CarePlan: </label>
      <input
        type="text"
        name="CarePlan"
        defaultValue="Wrist rest, avoidance of repetitive joint use"
      />
      <br />
      <label htmlFor="Accurex">Accurex: </label>
      <input type="text" name="Accurex" defaultValue="N/A" />
      <br />
    </fieldset>
    <br />
    <fieldset>
      <legend>Trigger Finger</legend>
      <label htmlFor="ConditionID">ConditionID: </label>
      <input type="text" name="ConditionID" defaultValue="M29" />
      <br />
      <label htmlFor="ConditionName">ConditionName: </label>
      <input type="text" name="ConditionName" defaultValue="Trigger Finger" />
      <br />
      <label htmlFor="ChiefComplaint">ChiefComplaint: </label>
      <input
        type="text"
        name="ChiefComplaint"
        defaultValue="Finger stiffness, clicking, or locking when bent and straightened."
      />
      <br />
      <label htmlFor="SocialHistory">SocialHistory: </label>
      <input
        type="text"
        name="SocialHistory"
        defaultValue="Repeated use or gripping activities, more common in women and in patients with diabetes."
      />
      <br />
      <label htmlFor="SystemsSurvey">SystemsSurvey: </label>
      <input
        type="text"
        name="SystemsSurvey"
        defaultValue="A condition in which a finger gets stuck in a bent position."
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
        defaultValue="Tenderness at the base of the finger, noticeable click or lock."
      />
      <br />
      <label htmlFor="Impression">Impression: </label>
      <input type="text" name="Impression" defaultValue="Trigger Finger" />
      <br />
      <label htmlFor="DifferentialDiagnosis">DifferentialDiagnosis: </label>
      <input
        type="text"
        name="DifferentialDiagnosis"
        defaultValue="Rheumatoid arthritis, gout"
      />
      <br />
      <label htmlFor="Allergies">Allergies: </label>
      <input type="text" name="Allergies" defaultValue="None" />
      <br />
      <label htmlFor="Pregnancy">Pregnancy: </label>
      <input type="text" name="Pregnancy" defaultValue="Splinting, NSAIDs" />
      <br />
      <label htmlFor="Treatment">Treatment: </label>
      <input
        type="text"
        name="Treatment"
        defaultValue="Steroid injections, surgery to release the tendon"
      />
      <br />
      <label htmlFor="CarePlan">CarePlan: </label>
      <input
        type="text"
        name="CarePlan"
        defaultValue="Hand exercises, minimise repetitive gripping activities"
      />
      <br />
      <label htmlFor="Accurex">Accurex: </label>
      <input type="text" name="Accurex" defaultValue="N/A" />
      <br />
    </fieldset>
    <br />
    <fieldset>
      <legend>Lumbar Radiculopathy</legend>
      <label htmlFor="ConditionID">ConditionID: </label>
      <input type="text" name="ConditionID" defaultValue="M30" />
      <br />
      <label htmlFor="ConditionName">ConditionName: </label>
      <input
        type="text"
        name="ConditionName"
        defaultValue="Lumbar Radiculopathy"
      />
      <br />
      <label htmlFor="ChiefComplaint">ChiefComplaint: </label>
      <input
        type="text"
        name="ChiefComplaint"
        defaultValue="Sharp pain radiating from the lower back down to the leg, numbness or weakness along the nerve pathway."
      />
      <br />
      <label htmlFor="SocialHistory">SocialHistory: </label>
      <input
        type="text"
        name="SocialHistory"
        defaultValue="Herniated disc, bone spurs, spinal stenosis causing nerve root compression."
      />
      <br />
      <label htmlFor="SystemsSurvey">SystemsSurvey: </label>
      <input
        type="text"
        name="SystemsSurvey"
        defaultValue="Nerve irritation or compression in the lumbar spine."
      />
      <br />
      <label htmlFor="Vitals">Vitals: </label>
      <input
        type="text"
        name="Vitals"
        defaultValue="BP 120/80, HR 75, Temp 37°C"
      />
      <br />
      <label htmlFor="PhysicalExam">PhysicalExam: </label>
      <input
        type="text"
        name="PhysicalExam"
        defaultValue="Pain on straight leg raise test, decreased reflexes and muscle strength in affected leg."
      />
      <br />
      <label htmlFor="Impression">Impression: </label>
      <input
        type="text"
        name="Impression"
        defaultValue="Lumbar Radiculopathy"
      />
      <br />
      <label htmlFor="DifferentialDiagnosis">DifferentialDiagnosis: </label>
      <input
        type="text"
        name="DifferentialDiagnosis"
        defaultValue="Muscle strain, peripheral neuropathy"
      />
      <br />
      <label htmlFor="Allergies">Allergies: </label>
      <input type="text" name="Allergies" defaultValue="None" />
      <br />
      <label htmlFor="Pregnancy">Pregnancy: </label>
      <input
        type="text"
        name="Pregnancy"
        defaultValue="Physical therapy and pain management"
      />
      <br />
      <label htmlFor="Treatment">Treatment: </label>
      <input
        type="text"
        name="Treatment"
        defaultValue="NSAIDs, physical therapy, epidural steroid injections"
      />
      <br />
      <label htmlFor="CarePlan">CarePlan: </label>
      <input
        type="text"
        name="CarePlan"
        defaultValue="Maintain proper posture, ergonomic workplace adjustments"
      />
      <br />
      <label htmlFor="Accurex">Accurex: </label>
      <input type="text" name="Accurex" defaultValue="N/A" />
      <br />
    </fieldset>
    <br />
    <input type="submit" defaultValue="Submit" />
  </form>
    </div>
  );
}

export default MSKForm;
