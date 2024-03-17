import React from 'react';

function PsychiatryForm() {
  return (
    <div>
  <title>Psychiatry Form</title>
  <form action="submit_form_endpoint" method="post">
    <fieldset>
      <legend>Major Depressive Disorder</legend>
      <label htmlFor="ConditionID">ConditionID: </label>
      <input type="text" name="ConditionID" defaultValue="PS1" />
      <br />
      <label htmlFor="ConditionName">ConditionName: </label>
      <input
        type="text"
        name="ConditionName"
        defaultValue="Major Depressive Disorder"
      />
      <br />
      <label htmlFor="ChiefComplaint">ChiefComplaint: </label>
      <input
        type="text"
        name="ChiefComplaint"
        defaultValue="Persistent sadness, loss of interest in activities, significant weight change."
      />
      <br />
      <label htmlFor="SocialHistory">SocialHistory: </label>
      <input
        type="text"
        name="SocialHistory"
        defaultValue="Can be triggered by life events, genetic predisposition, or biochemical factors."
      />
      <br />
      <label htmlFor="SystemsSurvey">SystemsSurvey: </label>
      <input
        type="text"
        name="SystemsSurvey"
        defaultValue="A mood disorder characterised by a persistent feeling of sadness and loss of interest."
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
        defaultValue="Depressed mood, reduced affect."
      />
      <br />
      <label htmlFor="Impression">Impression: </label>
      <input
        type="text"
        name="Impression"
        defaultValue="Major Depressive Disorder"
      />
      <br />
      <label htmlFor="DifferentialDiagnosis">DifferentialDiagnosis: </label>
      <input
        type="text"
        name="DifferentialDiagnosis"
        defaultValue="Bipolar disorder, adjustment disorder"
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
        defaultValue="Antidepressants, psychotherapy"
      />
      <br />
      <label htmlFor="CarePlan">CarePlan: </label>
      <input
        type="text"
        name="CarePlan"
        defaultValue="Regular follow-up, monitoring for side effects of medication, psychoeducation"
      />
      <br />
      <label htmlFor="Accurex">Accurex: </label>
      <input type="text" name="Accurex" defaultValue="N/A" />
      <br />
    </fieldset>
    <br />
    <fieldset>
      <legend>Generalised Anxiety Disorder</legend>
      <label htmlFor="ConditionID">ConditionID: </label>
      <input type="text" name="ConditionID" defaultValue="PS2" />
      <br />
      <label htmlFor="ConditionName">ConditionName: </label>
      <input
        type="text"
        name="ConditionName"
        defaultValue="Generalised Anxiety Disorder"
      />
      <br />
      <label htmlFor="ChiefComplaint">ChiefComplaint: </label>
      <input
        type="text"
        name="ChiefComplaint"
        defaultValue="Excessive worry about various topics, difficulty controlling the worry."
      />
      <br />
      <label htmlFor="SocialHistory">SocialHistory: </label>
      <input
        type="text"
        name="SocialHistory"
        defaultValue="Family history of anxiety, stressful life events."
      />
      <br />
      <label htmlFor="SystemsSurvey">SystemsSurvey: </label>
      <input
        type="text"
        name="SystemsSurvey"
        defaultValue="Characterised by persistent and excessive worry about a variety of topics."
      />
      <br />
      <label htmlFor="Vitals">Vitals: </label>
      <input
        type="text"
        name="Vitals"
        defaultValue="BP 130/85, HR 90, Temp 37°C"
      />
      <br />
      <label htmlFor="PhysicalExam">PhysicalExam: </label>
      <input
        type="text"
        name="PhysicalExam"
        defaultValue="Muscle tension, restlessness."
      />
      <br />
      <label htmlFor="Impression">Impression: </label>
      <input
        type="text"
        name="Impression"
        defaultValue="Generalised Anxiety Disorder"
      />
      <br />
      <label htmlFor="DifferentialDiagnosis">DifferentialDiagnosis: </label>
      <input
        type="text"
        name="DifferentialDiagnosis"
        defaultValue="Panic disorder, social anxiety disorder"
      />
      <br />
      <label htmlFor="Allergies">Allergies: </label>
      <input type="text" name="Allergies" defaultValue="None" />
      <br />
      <label htmlFor="Pregnancy">Pregnancy: </label>
      <input type="text" name="Pregnancy" defaultValue="Not applicable" />
      <br />
      <label htmlFor="Treatment">Treatment: </label>
      <input type="text" name="Treatment" defaultValue="SSRIs, CBT" />
      <br />
      <label htmlFor="CarePlan">CarePlan: </label>
      <input
        type="text"
        name="CarePlan"
        defaultValue="Stress management techniques, regular therapy sessions"
      />
      <br />
      <label htmlFor="Accurex">Accurex: </label>
      <input type="text" name="Accurex" defaultValue="N/A" />
      <br />
    </fieldset>
    <br />
    <fieldset>
      <legend>Bipolar Disorder</legend>
      <label htmlFor="ConditionID">ConditionID: </label>
      <input type="text" name="ConditionID" defaultValue="PS3" />
      <br />
      <label htmlFor="ConditionName">ConditionName: </label>
      <input type="text" name="ConditionName" defaultValue="Bipolar Disorder" />
      <br />
      <label htmlFor="ChiefComplaint">ChiefComplaint: </label>
      <input
        type="text"
        name="ChiefComplaint"
        defaultValue="Periods of depression alternated with episodes of mania or hypomania."
      />
      <br />
      <label htmlFor="SocialHistory">SocialHistory: </label>
      <input
        type="text"
        name="SocialHistory"
        defaultValue="Genetic factors, neurotransmitter imbalances."
      />
      <br />
      <label htmlFor="SystemsSurvey">SystemsSurvey: </label>
      <input
        type="text"
        name="SystemsSurvey"
        defaultValue="A disorder associated with episodes of mood swings ranging from depressive lows to manic highs."
      />
      <br />
      <label htmlFor="Vitals">Vitals: </label>
      <input
        type="text"
        name="Vitals"
        defaultValue="BP 120/80, HR 80, Temp 37°C"
      />
      <br />
      <label htmlFor="PhysicalExam">PhysicalExam: </label>
      <input
        type="text"
        name="PhysicalExam"
        defaultValue="Elevated or irritable mood during manic phases, low mood during depressive phases."
      />
      <br />
      <label htmlFor="Impression">Impression: </label>
      <input type="text" name="Impression" defaultValue="Bipolar Disorder" />
      <br />
      <label htmlFor="DifferentialDiagnosis">DifferentialDiagnosis: </label>
      <input
        type="text"
        name="DifferentialDiagnosis"
        defaultValue="Major depressive disorder, ADHD"
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
        defaultValue="Mood stabilisers, antipsychotics, psychotherapy"
      />
      <br />
      <label htmlFor="CarePlan">CarePlan: </label>
      <input
        type="text"
        name="CarePlan"
        defaultValue="Lifestyle adjustments, monitoring for mood changes"
      />
      <br />
      <label htmlFor="Accurex">Accurex: </label>
      <input type="text" name="Accurex" defaultValue="N/A" />
      <br />
    </fieldset>
    <br />
    <fieldset>
      <legend>Schizophrenia</legend>
      <label htmlFor="ConditionID">ConditionID: </label>
      <input type="text" name="ConditionID" defaultValue="PS4" />
      <br />
      <label htmlFor="ConditionName">ConditionName: </label>
      <input type="text" name="ConditionName" defaultValue="Schizophrenia" />
      <br />
      <label htmlFor="ChiefComplaint">ChiefComplaint: </label>
      <input
        type="text"
        name="ChiefComplaint"
        defaultValue="Hallucinations, delusions, disorganised thinking, social withdrawal."
      />
      <br />
      <label htmlFor="SocialHistory">SocialHistory: </label>
      <input
        type="text"
        name="SocialHistory"
        defaultValue="Genetic predisposition, environmental factors."
      />
      <br />
      <label htmlFor="SystemsSurvey">SystemsSurvey: </label>
      <input
        type="text"
        name="SystemsSurvey"
        defaultValue="A chronic brain disorder characterised by hallucinations, delusions, and cognitive issues."
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
        defaultValue="Affective flattening, alogia, avolition."
      />
      <br />
      <label htmlFor="Impression">Impression: </label>
      <input type="text" name="Impression" defaultValue="Schizophrenia" />
      <br />
      <label htmlFor="DifferentialDiagnosis">DifferentialDiagnosis: </label>
      <input
        type="text"
        name="DifferentialDiagnosis"
        defaultValue="Schizoaffective disorder, bipolar disorder"
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
        defaultValue="Antipsychotics, psychosocial interventions"
      />
      <br />
      <label htmlFor="CarePlan">CarePlan: </label>
      <input
        type="text"
        name="CarePlan"
        defaultValue="Regular psychiatric evaluations, social skills training"
      />
      <br />
      <label htmlFor="Accurex">Accurex: </label>
      <input type="text" name="Accurex" defaultValue="N/A" />
      <br />
    </fieldset>
    <br />
    <fieldset>
      <legend>Post-Traumatic Stress Disorder</legend>
      <label htmlFor="ConditionID">ConditionID: </label>
      <input type="text" name="ConditionID" defaultValue="PS5" />
      <br />
      <label htmlFor="ConditionName">ConditionName: </label>
      <input
        type="text"
        name="ConditionName"
        defaultValue="Post-Traumatic Stress Disorder"
      />
      <br />
      <label htmlFor="ChiefComplaint">ChiefComplaint: </label>
      <input
        type="text"
        name="ChiefComplaint"
        defaultValue="Flashbacks, nightmares, severe anxiety, uncontrollable thoughts about a traumatic event."
      />
      <br />
      <label htmlFor="SocialHistory">SocialHistory: </label>
      <input
        type="text"
        name="SocialHistory"
        defaultValue="History of traumatic event such as warfare, natural disasters, or personal assault."
      />
      <br />
      <label htmlFor="SystemsSurvey">SystemsSurvey: </label>
      <input
        type="text"
        name="SystemsSurvey"
        defaultValue="A disorder characterised by failure to recover after experiencing or witnessing a terrifying event."
      />
      <br />
      <label htmlFor="Vitals">Vitals: </label>
      <input
        type="text"
        name="Vitals"
        defaultValue="BP 130/90, HR 100, Temp 37°C"
      />
      <br />
      <label htmlFor="PhysicalExam">PhysicalExam: </label>
      <input
        type="text"
        name="PhysicalExam"
        defaultValue="Increased startle response, hypervigilance."
      />
      <br />
      <label htmlFor="Impression">Impression: </label>
      <input
        type="text"
        name="Impression"
        defaultValue="Post-Traumatic Stress Disorder"
      />
      <br />
      <label htmlFor="DifferentialDiagnosis">DifferentialDiagnosis: </label>
      <input
        type="text"
        name="DifferentialDiagnosis"
        defaultValue="Acute stress disorder, adjustment disorders"
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
        defaultValue="SSRIs, trauma-focused CBT"
      />
      <br />
      <label htmlFor="CarePlan">CarePlan: </label>
      <input
        type="text"
        name="CarePlan"
        defaultValue="Exposure therapy, EMDR, coping strategies for stress"
      />
      <br />
      <label htmlFor="Accurex">Accurex: </label>
      <input type="text" name="Accurex" defaultValue="N/A" />
      <br />
    </fieldset>
    <br />
    <fieldset>
      <legend>Major Depressive Disorder</legend>
      <label htmlFor="ConditionID">ConditionID: </label>
      <input type="text" name="ConditionID" defaultValue="PS6" />
      <br />
      <label htmlFor="ConditionName">ConditionName: </label>
      <input
        type="text"
        name="ConditionName"
        defaultValue="Major Depressive Disorder"
      />
      <br />
      <label htmlFor="ChiefComplaint">ChiefComplaint: </label>
      <input
        type="text"
        name="ChiefComplaint"
        defaultValue="Persistent sadness, loss of interest in activities, significant weight change."
      />
      <br />
      <label htmlFor="SocialHistory">SocialHistory: </label>
      <input
        type="text"
        name="SocialHistory"
        defaultValue="Can be triggered by life events, genetic predisposition, or biochemical factors."
      />
      <br />
      <label htmlFor="SystemsSurvey">SystemsSurvey: </label>
      <input
        type="text"
        name="SystemsSurvey"
        defaultValue="A mood disorder characterised by a persistent feeling of sadness and loss of interest."
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
        defaultValue="Depressed mood, reduced affect."
      />
      <br />
      <label htmlFor="Impression">Impression: </label>
      <input
        type="text"
        name="Impression"
        defaultValue="Major Depressive Disorder"
      />
      <br />
      <label htmlFor="DifferentialDiagnosis">DifferentialDiagnosis: </label>
      <input
        type="text"
        name="DifferentialDiagnosis"
        defaultValue="Bipolar disorder, adjustment disorder"
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
        defaultValue="Antidepressants, psychotherapy"
      />
      <br />
      <label htmlFor="CarePlan">CarePlan: </label>
      <input
        type="text"
        name="CarePlan"
        defaultValue="Regular follow-up, monitoring for side effects of medication, psychoeducation"
      />
      <br />
      <label htmlFor="Accurex">Accurex: </label>
      <input type="text" name="Accurex" defaultValue="N/A" />
      <br />
    </fieldset>
    <br />
    <fieldset>
      <legend>Generalised Anxiety Disorder</legend>
      <label htmlFor="ConditionID">ConditionID: </label>
      <input type="text" name="ConditionID" defaultValue="PS7" />
      <br />
      <label htmlFor="ConditionName">ConditionName: </label>
      <input
        type="text"
        name="ConditionName"
        defaultValue="Generalised Anxiety Disorder"
      />
      <br />
      <label htmlFor="ChiefComplaint">ChiefComplaint: </label>
      <input
        type="text"
        name="ChiefComplaint"
        defaultValue="Excessive worry about various topics, difficulty controlling the worry."
      />
      <br />
      <label htmlFor="SocialHistory">SocialHistory: </label>
      <input
        type="text"
        name="SocialHistory"
        defaultValue="Family history of anxiety, stressful life events."
      />
      <br />
      <label htmlFor="SystemsSurvey">SystemsSurvey: </label>
      <input
        type="text"
        name="SystemsSurvey"
        defaultValue="Characterised by persistent and excessive worry about a variety of topics."
      />
      <br />
      <label htmlFor="Vitals">Vitals: </label>
      <input
        type="text"
        name="Vitals"
        defaultValue="BP 130/85, HR 90, Temp 37°C"
      />
      <br />
      <label htmlFor="PhysicalExam">PhysicalExam: </label>
      <input
        type="text"
        name="PhysicalExam"
        defaultValue="Muscle tension, restlessness."
      />
      <br />
      <label htmlFor="Impression">Impression: </label>
      <input
        type="text"
        name="Impression"
        defaultValue="Generalised Anxiety Disorder"
      />
      <br />
      <label htmlFor="DifferentialDiagnosis">DifferentialDiagnosis: </label>
      <input
        type="text"
        name="DifferentialDiagnosis"
        defaultValue="Panic disorder, social anxiety disorder"
      />
      <br />
      <label htmlFor="Allergies">Allergies: </label>
      <input type="text" name="Allergies" defaultValue="None" />
      <br />
      <label htmlFor="Pregnancy">Pregnancy: </label>
      <input type="text" name="Pregnancy" defaultValue="Not applicable" />
      <br />
      <label htmlFor="Treatment">Treatment: </label>
      <input type="text" name="Treatment" defaultValue="SSRIs, CBT" />
      <br />
      <label htmlFor="CarePlan">CarePlan: </label>
      <input
        type="text"
        name="CarePlan"
        defaultValue="Stress management techniques, regular therapy sessions"
      />
      <br />
      <label htmlFor="Accurex">Accurex: </label>
      <input type="text" name="Accurex" defaultValue="N/A" />
      <br />
    </fieldset>
    <br />
    <fieldset>
      <legend>Bipolar Disorder</legend>
      <label htmlFor="ConditionID">ConditionID: </label>
      <input type="text" name="ConditionID" defaultValue="PS8" />
      <br />
      <label htmlFor="ConditionName">ConditionName: </label>
      <input type="text" name="ConditionName" defaultValue="Bipolar Disorder" />
      <br />
      <label htmlFor="ChiefComplaint">ChiefComplaint: </label>
      <input
        type="text"
        name="ChiefComplaint"
        defaultValue="Periods of depression alternated with episodes of mania or hypomania."
      />
      <br />
      <label htmlFor="SocialHistory">SocialHistory: </label>
      <input
        type="text"
        name="SocialHistory"
        defaultValue="Genetic factors, neurotransmitter imbalances."
      />
      <br />
      <label htmlFor="SystemsSurvey">SystemsSurvey: </label>
      <input
        type="text"
        name="SystemsSurvey"
        defaultValue="A disorder associated with episodes of mood swings ranging from depressive lows to manic highs."
      />
      <br />
      <label htmlFor="Vitals">Vitals: </label>
      <input
        type="text"
        name="Vitals"
        defaultValue="BP 120/80, HR 80, Temp 37°C"
      />
      <br />
      <label htmlFor="PhysicalExam">PhysicalExam: </label>
      <input
        type="text"
        name="PhysicalExam"
        defaultValue="Elevated or irritable mood during manic phases, low mood during depressive phases."
      />
      <br />
      <label htmlFor="Impression">Impression: </label>
      <input type="text" name="Impression" defaultValue="Bipolar Disorder" />
      <br />
      <label htmlFor="DifferentialDiagnosis">DifferentialDiagnosis: </label>
      <input
        type="text"
        name="DifferentialDiagnosis"
        defaultValue="Major depressive disorder, ADHD"
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
        defaultValue="Mood stabilisers, antipsychotics, psychotherapy"
      />
      <br />
      <label htmlFor="CarePlan">CarePlan: </label>
      <input
        type="text"
        name="CarePlan"
        defaultValue="Lifestyle adjustments, monitoring for mood changes"
      />
      <br />
      <label htmlFor="Accurex">Accurex: </label>
      <input type="text" name="Accurex" defaultValue="N/A" />
      <br />
    </fieldset>
    <br />
    <fieldset>
      <legend>Schizophrenia</legend>
      <label htmlFor="ConditionID">ConditionID: </label>
      <input type="text" name="ConditionID" defaultValue="PS9" />
      <br />
      <label htmlFor="ConditionName">ConditionName: </label>
      <input type="text" name="ConditionName" defaultValue="Schizophrenia" />
      <br />
      <label htmlFor="ChiefComplaint">ChiefComplaint: </label>
      <input
        type="text"
        name="ChiefComplaint"
        defaultValue="Hallucinations, delusions, disorganised thinking, social withdrawal."
      />
      <br />
      <label htmlFor="SocialHistory">SocialHistory: </label>
      <input
        type="text"
        name="SocialHistory"
        defaultValue="Genetic predisposition, environmental factors."
      />
      <br />
      <label htmlFor="SystemsSurvey">SystemsSurvey: </label>
      <input
        type="text"
        name="SystemsSurvey"
        defaultValue="A chronic brain disorder characterised by hallucinations, delusions, and cognitive issues."
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
        defaultValue="Affective flattening, alogia, avolition."
      />
      <br />
      <label htmlFor="Impression">Impression: </label>
      <input type="text" name="Impression" defaultValue="Schizophrenia" />
      <br />
      <label htmlFor="DifferentialDiagnosis">DifferentialDiagnosis: </label>
      <input
        type="text"
        name="DifferentialDiagnosis"
        defaultValue="Schizoaffective disorder, bipolar disorder"
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
        defaultValue="Antipsychotics, psychosocial interventions"
      />
      <br />
      <label htmlFor="CarePlan">CarePlan: </label>
      <input
        type="text"
        name="CarePlan"
        defaultValue="Regular psychiatric evaluations, social skills training"
      />
      <br />
      <label htmlFor="Accurex">Accurex: </label>
      <input type="text" name="Accurex" defaultValue="N/A" />
      <br />
    </fieldset>
    <br />
    <fieldset>
      <legend>Post-Traumatic Stress Disorder</legend>
      <label htmlFor="ConditionID">ConditionID: </label>
      <input type="text" name="ConditionID" defaultValue="PS10" />
      <br />
      <label htmlFor="ConditionName">ConditionName: </label>
      <input
        type="text"
        name="ConditionName"
        defaultValue="Post-Traumatic Stress Disorder"
      />
      <br />
      <label htmlFor="ChiefComplaint">ChiefComplaint: </label>
      <input
        type="text"
        name="ChiefComplaint"
        defaultValue="Flashbacks, nightmares, severe anxiety, uncontrollable thoughts about a traumatic event."
      />
      <br />
      <label htmlFor="SocialHistory">SocialHistory: </label>
      <input
        type="text"
        name="SocialHistory"
        defaultValue="History of traumatic event such as warfare, natural disasters, or personal assault."
      />
      <br />
      <label htmlFor="SystemsSurvey">SystemsSurvey: </label>
      <input
        type="text"
        name="SystemsSurvey"
        defaultValue="A disorder characterised by failure to recover after experiencing or witnessing a terrifying event."
      />
      <br />
      <label htmlFor="Vitals">Vitals: </label>
      <input
        type="text"
        name="Vitals"
        defaultValue="BP 130/90, HR 100, Temp 37°C"
      />
      <br />
      <label htmlFor="PhysicalExam">PhysicalExam: </label>
      <input
        type="text"
        name="PhysicalExam"
        defaultValue="Increased startle response, hypervigilance."
      />
      <br />
      <label htmlFor="Impression">Impression: </label>
      <input
        type="text"
        name="Impression"
        defaultValue="Post-Traumatic Stress Disorder"
      />
      <br />
      <label htmlFor="DifferentialDiagnosis">DifferentialDiagnosis: </label>
      <input
        type="text"
        name="DifferentialDiagnosis"
        defaultValue="Acute stress disorder, adjustment disorders"
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
        defaultValue="SSRIs, trauma-focused CBT"
      />
      <br />
      <label htmlFor="CarePlan">CarePlan: </label>
      <input
        type="text"
        name="CarePlan"
        defaultValue="Exposure therapy, EMDR, coping strategies for stress"
      />
      <br />
      <label htmlFor="Accurex">Accurex: </label>
      <input type="text" name="Accurex" defaultValue="N/A" />
      <br />
    </fieldset>
    <br />
    <fieldset>
      <legend>Bipolar Disorder</legend>
      <label htmlFor="ConditionID">ConditionID: </label>
      <input type="text" name="ConditionID" defaultValue="PS11" />
      <br />
      <label htmlFor="ConditionName">ConditionName: </label>
      <input type="text" name="ConditionName" defaultValue="Bipolar Disorder" />
      <br />
      <label htmlFor="ChiefComplaint">ChiefComplaint: </label>
      <input
        type="text"
        name="ChiefComplaint"
        defaultValue="Mood swings ranging from depressive lows to manic highs."
      />
      <br />
      <label htmlFor="SocialHistory">SocialHistory: </label>
      <input
        type="text"
        name="SocialHistory"
        defaultValue="Possible genetic factors, stress, and substance abuse."
      />
      <br />
      <label htmlFor="SystemsSurvey">SystemsSurvey: </label>
      <input
        type="text"
        name="SystemsSurvey"
        defaultValue="Mood, energy, and activity levels affected."
      />
      <br />
      <label htmlFor="Vitals">Vitals: </label>
      <input
        type="text"
        name="Vitals"
        defaultValue="May vary based on mood state"
      />
      <br />
      <label htmlFor="PhysicalExam">PhysicalExam: </label>
      <input
        type="text"
        name="PhysicalExam"
        defaultValue="May present with rapid speech and decreased need for sleep during manic phase"
      />
      <br />
      <label htmlFor="Impression">Impression: </label>
      <input type="text" name="Impression" defaultValue="Bipolar Disorder" />
      <br />
      <label htmlFor="DifferentialDiagnosis">DifferentialDiagnosis: </label>
      <input
        type="text"
        name="DifferentialDiagnosis"
        defaultValue="Major depressive disorder, ADHD"
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
        defaultValue="Mood stabilisers, antipsychotics, psychotherapy"
      />
      <br />
      <label htmlFor="CarePlan">CarePlan: </label>
      <input
        type="text"
        name="CarePlan"
        defaultValue="Regular monitoring, psychoeducation, lifestyle management"
      />
      <br />
      <label htmlFor="Accurex">Accurex: </label>
      <input
        type="text"
        name="Accurex"
        defaultValue="Adjust medications based on mood state, watch for signs of relapse"
      />
      <br />
    </fieldset>
    <br />
    <fieldset>
      <legend>Schizophrenia</legend>
      <label htmlFor="ConditionID">ConditionID: </label>
      <input type="text" name="ConditionID" defaultValue="PS12" />
      <br />
      <label htmlFor="ConditionName">ConditionName: </label>
      <input type="text" name="ConditionName" defaultValue="Schizophrenia" />
      <br />
      <label htmlFor="ChiefComplaint">ChiefComplaint: </label>
      <input
        type="text"
        name="ChiefComplaint"
        defaultValue="Hallucinations, delusions, disorganised thinking."
      />
      <br />
      <label htmlFor="SocialHistory">SocialHistory: </label>
      <input
        type="text"
        name="SocialHistory"
        defaultValue="Genetic predisposition, environmental factors."
      />
      <br />
      <label htmlFor="SystemsSurvey">SystemsSurvey: </label>
      <input
        type="text"
        name="SystemsSurvey"
        defaultValue="Affects thought processes, perception, and emotional responsiveness."
      />
      <br />
      <label htmlFor="Vitals">Vitals: </label>
      <input type="text" name="Vitals" defaultValue="Normal" />
      <br />
      <label htmlFor="PhysicalExam">PhysicalExam: </label>
      <input
        type="text"
        name="PhysicalExam"
        defaultValue="Disorganised behaviour, flat affect or inappropriate emotional responses"
      />
      <br />
      <label htmlFor="Impression">Impression: </label>
      <input type="text" name="Impression" defaultValue="Schizophrenia" />
      <br />
      <label htmlFor="DifferentialDiagnosis">DifferentialDiagnosis: </label>
      <input
        type="text"
        name="DifferentialDiagnosis"
        defaultValue="Schizoaffective disorder, bipolar disorder"
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
        defaultValue="Antipsychotic medications, psychotherapy, social support"
      />
      <br />
      <label htmlFor="CarePlan">CarePlan: </label>
      <input
        type="text"
        name="CarePlan"
        defaultValue="Medication adherence, skills training, supportive therapy"
      />
      <br />
      <label htmlFor="Accurex">Accurex: </label>
      <input
        type="text"
        name="Accurex"
        defaultValue="Monitor treatment response, manage side effects, support reintegration into community"
      />
      <br />
    </fieldset>
    <br />
    <fieldset>
      <legend>Obsessive-Compulsive Disorder</legend>
      <label htmlFor="ConditionID">ConditionID: </label>
      <input type="text" name="ConditionID" defaultValue="PS13" />
      <br />
      <label htmlFor="ConditionName">ConditionName: </label>
      <input
        type="text"
        name="ConditionName"
        defaultValue="Obsessive-Compulsive Disorder"
      />
      <br />
      <label htmlFor="ChiefComplaint">ChiefComplaint: </label>
      <input
        type="text"
        name="ChiefComplaint"
        defaultValue="Recurrent, unwanted thoughts (obsessions) and/or repetitive behaviours (compulsions)."
      />
      <br />
      <label htmlFor="SocialHistory">SocialHistory: </label>
      <input
        type="text"
        name="SocialHistory"
        defaultValue="Family history of OCD, traumatic life events."
      />
      <br />
      <label htmlFor="SystemsSurvey">SystemsSurvey: </label>
      <input
        type="text"
        name="SystemsSurvey"
        defaultValue="Impact on daily functioning due to time spent on obsessions/compulsions."
      />
      <br />
      <label htmlFor="Vitals">Vitals: </label>
      <input type="text" name="Vitals" defaultValue="Normal" />
      <br />
      <label htmlFor="PhysicalExam">PhysicalExam: </label>
      <input
        type="text"
        name="PhysicalExam"
        defaultValue="No specific findings; may exhibit repetitive behaviours during exam"
      />
      <br />
      <label htmlFor="Impression">Impression: </label>
      <input
        type="text"
        name="Impression"
        defaultValue="Obsessive-Compulsive Disorder"
      />
      <br />
      <label htmlFor="DifferentialDiagnosis">DifferentialDiagnosis: </label>
      <input
        type="text"
        name="DifferentialDiagnosis"
        defaultValue="Anxiety disorders, depression"
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
        defaultValue="SSRIs, Cognitive Behavioural Therapy (CBT) with exposure and response prevention"
      />
      <br />
      <label htmlFor="CarePlan">CarePlan: </label>
      <input
        type="text"
        name="CarePlan"
        defaultValue="Regular therapy sessions, medication monitoring"
      />
      <br />
      <label htmlFor="Accurex">Accurex: </label>
      <input
        type="text"
        name="Accurex"
        defaultValue="Evaluate efficacy of treatment, adjust as needed, focus on reducing symptoms"
      />
      <br />
    </fieldset>
    <br />
    <fieldset>
      <legend>Post-Traumatic Stress Disorder</legend>
      <label htmlFor="ConditionID">ConditionID: </label>
      <input type="text" name="ConditionID" defaultValue="PS14" />
      <br />
      <label htmlFor="ConditionName">ConditionName: </label>
      <input
        type="text"
        name="ConditionName"
        defaultValue="Post-Traumatic Stress Disorder"
      />
      <br />
      <label htmlFor="ChiefComplaint">ChiefComplaint: </label>
      <input
        type="text"
        name="ChiefComplaint"
        defaultValue="Flashbacks, nightmares, severe anxiety, and uncontrollable thoughts about a traumatic event."
      />
      <br />
      <label htmlFor="SocialHistory">SocialHistory: </label>
      <input
        type="text"
        name="SocialHistory"
        defaultValue="Exposure to traumatic event such as warfare, natural disasters, or personal assault."
      />
      <br />
      <label htmlFor="SystemsSurvey">SystemsSurvey: </label>
      <input
        type="text"
        name="SystemsSurvey"
        defaultValue="Impacts emotional regulation, memory, and interpersonal relationships."
      />
      <br />
      <label htmlFor="Vitals">Vitals: </label>
      <input type="text" name="Vitals" defaultValue="Normal" />
      <br />
      <label htmlFor="PhysicalExam">PhysicalExam: </label>
      <input
        type="text"
        name="PhysicalExam"
        defaultValue="Increased startle response, difficulty concentrating"
      />
      <br />
      <label htmlFor="Impression">Impression: </label>
      <input
        type="text"
        name="Impression"
        defaultValue="Post-Traumatic Stress Disorder"
      />
      <br />
      <label htmlFor="DifferentialDiagnosis">DifferentialDiagnosis: </label>
      <input
        type="text"
        name="DifferentialDiagnosis"
        defaultValue="Acute stress disorder, anxiety disorders"
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
        defaultValue="Trauma-focused psychotherapy, SSRIs, support groups"
      />
      <br />
      <label htmlFor="CarePlan">CarePlan: </label>
      <input
        type="text"
        name="CarePlan"
        defaultValue="Trauma-informed care, avoidance of triggers, coping strategies development"
      />
      <br />
      <label htmlFor="Accurex">Accurex: </label>
      <input
        type="text"
        name="Accurex"
        defaultValue="Assess for comorbid conditions, support system strengthening, ongoing monitoring for symptom changes"
      />
      <br />
    </fieldset>
    <br />
    <fieldset>
      <legend>Attention-Deficit/Hyperactivity Disorder</legend>
      <label htmlFor="ConditionID">ConditionID: </label>
      <input type="text" name="ConditionID" defaultValue="PS15" />
      <br />
      <label htmlFor="ConditionName">ConditionName: </label>
      <input
        type="text"
        name="ConditionName"
        defaultValue="Attention-Deficit/Hyperactivity Disorder"
      />
      <br />
      <label htmlFor="ChiefComplaint">ChiefComplaint: </label>
      <input
        type="text"
        name="ChiefComplaint"
        defaultValue="Difficulty paying attention, hyperactivity, impulsive behaviour."
      />
      <br />
      <label htmlFor="SocialHistory">SocialHistory: </label>
      <input
        type="text"
        name="SocialHistory"
        defaultValue="Genetic factors, brain structure and function."
      />
      <br />
      <label htmlFor="SystemsSurvey">SystemsSurvey: </label>
      <input
        type="text"
        name="SystemsSurvey"
        defaultValue="Impacts attention, self-control, and activity levels."
      />
      <br />
      <label htmlFor="Vitals">Vitals: </label>
      <input type="text" name="Vitals" defaultValue="Normal" />
      <br />
      <label htmlFor="PhysicalExam">PhysicalExam: </label>
      <input
        type="text"
        name="PhysicalExam"
        defaultValue="May exhibit restlessness or difficulty remaining seated"
      />
      <br />
      <label htmlFor="Impression">Impression: </label>
      <input
        type="text"
        name="Impression"
        defaultValue="Attention-Deficit/Hyperactivity Disorder"
      />
      <br />
      <label htmlFor="DifferentialDiagnosis">DifferentialDiagnosis: </label>
      <input
        type="text"
        name="DifferentialDiagnosis"
        defaultValue="Mood disorders, anxiety disorders"
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
        defaultValue="Stimulant medications, behavioural interventions, psychoeducation"
      />
      <br />
      <label htmlFor="CarePlan">CarePlan: </label>
      <input
        type="text"
        name="CarePlan"
        defaultValue="Behavioural strategies for managing symptoms, medication management"
      />
      <br />
      <label htmlFor="Accurex">Accurex: </label>
      <input
        type="text"
        name="Accurex"
        defaultValue="Regular follow-up to adjust treatment, focus on functional improvement in daily activities"
      />
      <br />
    </fieldset>
    <br />
    <input type="submit" defaultValue="Submit" />
  </form>
    </div>
  );
}

export default PsychiatryForm;
