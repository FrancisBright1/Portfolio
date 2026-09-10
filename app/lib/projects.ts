export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  category: "Retention" | "Segmentation" | "Data Preparation" | "Data Storytelling";
  image: string;
  problem: string;
  data: string;
  approach: string;
  tools: string[];
  analysed: string;
  findings: string[];
  implication: string;
  recommendation: string;
  links: ProjectLink[];
}

export const projects: Project[] = [
  {
    slug: "predictive-retention-model",
    title: "Predictive Retention Model",
    subtitle: "Hospital readmission risk as a practical analogue for customer churn",
    category: "Retention",
    image: "/project-retention.jpg",
    problem:
      "Hospitals need an early signal of which diabetic patients are more likely to be readmitted. The same question appears in product analytics: which customers are most likely to churn, and what should the team do before they leave?",
    data:
      "Patient-level records covering age, previous visits, glucose level, A1C result, number of medications and length of stay. The target variable is readmission (yes / no).",
    approach:
      "Explored the data to understand how clinical and utilisation features relate to readmission. Cleaned and prepared the variables, trained a logistic regression classifier in scikit-learn, and wrapped the model in a Streamlit app so a non-technical user can enter a patient profile and see a risk flag. The workflow — exploratory analysis, feature preparation, supervised modelling and a usable output — is the same sequence used for churn scoring in a product or payments context.",
    tools: ["Python", "Pandas", "Scikit-learn", "Streamlit"],
    analysed:
      "Which patient attributes are associated with a higher chance of coming back into hospital, and how a simple, interpretable model can surface that risk.",
    findings: [
      "A logistic regression model can produce a usable yes/no readmission flag from a small set of clinical and utilisation features.",
      "The most useful inputs in this build were prior visits, length of stay, medication count and lab markers — signals that also have clear analogues in product data (usage frequency, tenure, support load).",
      "Packaging the model in a simple app made the result usable by someone who does not write Python.",
    ],
    implication:
      "Retention work is only useful if risk is identified early enough to act. A transparent model plus a simple interface is more valuable to operators than a complex model that nobody can use.",
    recommendation:
      "Treat the score as a triage tool, not an automatic decision. Review high-risk cases, design a targeted intervention, and measure whether those interventions change outcomes. Model evaluation metrics from this build are not published here because they were not recorded in the project repository.",
    links: [
      { label: "Live app", url: "https://francisbright1-readmission-app-app-muqxfb.streamlit.app/" },
      { label: "GitHub", url: "https://github.com/FrancisBright1/readmission-app" },
    ],
  },
  {
    slug: "user-segmentation-dashboard",
    title: "User Segmentation & Engagement Dashboard",
    subtitle: "K-Means segments and a self-service view of engagement",
    category: "Segmentation",
    image: "/project-segmentation.jpg",
    problem:
      "A single message or offer for every user wastes effort. The growth team needed groups of users who behave differently, so messaging, product prompts and follow-up could be matched to how people actually use the product.",
    data:
      "Demographic and behavioural fields used to describe how users engage, stay and convert. Segment-level KPIs included engagement rate, retention curves and conversion through the funnel.",
    approach:
      "Clustered users with K-Means in Python after preparing and scaling the relevant features. Compared clusters on engagement, retention and conversion. Built a Tableau dashboard so the growth team could inspect each segment without waiting for a new analysis request. Used opportunity sizing to show which funnel stages were worth the most attention.",
    tools: ["Python", "Pandas", "K-Means", "SQL", "Tableau"],
    analysed:
      "How users group by behaviour, how each group moves through the funnel, and which groups are worth different treatments.",
    findings: [
      "Users do not behave as one audience. Clusters separate high-engagement users from those who start strongly and then drop off, and from low-activity users who rarely convert.",
      "Segment-level retention curves make it clearer where a generic campaign is wasted.",
      "A self-service dashboard reduces repeated ad-hoc requests when the team wants to check the same KPIs each week.",
    ],
    implication:
      "Personalisation only works if the segments mean something commercially. A cluster that cannot be described in business language is not ready for a campaign.",
    recommendation:
      "Give high-engagement users reasons to stay and refer. Reach mid-activity users with prompts tied to the step they abandon. Spend less on broad campaigns aimed at users who have already gone quiet, and test a cheaper win-back path instead. A public dashboard link is not available for this project.",
    links: [{ label: "GitHub", url: "https://github.com/FrancisBright1" }],
  },
  {
    slug: "etl-pipeline-data-quality",
    title: "ETL Pipeline & Data Quality",
    subtitle: "Preparing 100,000+ records so dashboards can be trusted",
    category: "Data Preparation",
    image: "/project-etl.jpg",
    problem:
      "Manual data preparation was slow and inconsistent. Downstream dashboards were hard to trust, and some queries were too heavy to use in a meeting.",
    data:
      "More than 100,000 records that needed to be ingested, cleaned, reshaped and checked before they could support product metric reporting.",
    approach:
      "Built a modular Python (Pandas) pipeline with separate steps for ingestion, cleaning, transformation and validation. Added automated quality checks so broken or incomplete loads could be caught before they reached a dashboard. Redesigned the analytical tables so common SQL queries did not scan more than they needed.",
    tools: ["Python", "Pandas", "SQL", "ETL", "Data modelling"],
    analysed:
      "Where the raw data was incomplete or inconsistent, what had to change before it was analysis-ready, and how the shape of the tables affected dashboard speed.",
    findings: [
      "Most reporting delays came from cleaning and reshaping work that was repeated by hand.",
      "Validation rules (missing values, unexpected categories, duplicate keys) caught issues that would otherwise have appeared as wrong numbers on a dashboard.",
      "A leaner analytical model reduced dashboard query time after the remodel, as recorded in the CV for this project.",
    ],
    implication:
      "A dashboard is only as good as the table behind it. If analysts do not trust the source, they will keep exporting to Excel and the self-service layer will fail.",
    recommendation:
      "Treat data quality checks as part of the product, not a one-off clean-up. Keep the raw extract, the cleaned table and the quality log separate so problems can be traced. A dedicated public repository for this pipeline is not published yet.",
    links: [{ label: "GitHub profile", url: "https://github.com/FrancisBright1" }],
  },
  {
    slug: "jamb-performance-analysis",
    title: "JAMB Performance Analysis",
    subtitle: "Explaining UTME score patterns to non-technical readers",
    category: "Data Storytelling",
    image: "/project-jamb.jpg",
    problem:
      "JAMB results are widely discussed in Nigeria, but it is hard for schools, parents and education stakeholders to see how scores sit across gender, school setting and support factors without opening a spreadsheet.",
    data:
      "A student-level exam file used in the public Streamlit app. Fields include JAMB score, gender, school location, parental involvement, extra tutorials, socioeconomic status and access to learning materials. The published README describes the file as realistic practice data rather than an official JAMB extract.",
    approach:
      "Cleaned the file, grouped scores into bands, and built an interactive Streamlit app with Plotly charts. The app shows score distribution, comparisons by gender and school location, and how extra tutorials, parental involvement and access to materials sit against outcomes. Filters let a reader explore the same questions without writing code.",
    tools: ["Python", "Pandas", "Plotly", "Streamlit"],
    analysed:
      "How scores are distributed, how performance differs by gender and school location, and whether extra support and home factors line up with higher scores in this dataset.",
    findings: [
      "Score-band views make it easier to talk about performance than a single average.",
      "Breaking results by gender and school location shows where gaps appear, instead of treating all candidates as one group.",
      "Support factors in the file (tutorials, parental involvement, learning materials) can be compared directly against score patterns in the app.",
    ],
    implication:
      "Education conversations stay vague when the only number available is a national average. A simple, filterable view helps a non-technical reader ask a better question.",
    recommendation:
      "Use the dashboard to spot groups that sit below the score bands that matter for admission, then investigate the support factors those groups lack. Do not treat this file as an official national census — it is an analysis and storytelling project on a practice dataset.",
    links: [
      { label: "Live dashboard", url: "https://francisbright1-jamb-performance-analysis-jamb-app-bv9irx.streamlit.app/" },
      { label: "GitHub", url: "https://github.com/FrancisBright1/Jamb-Performance-Analysis" },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
