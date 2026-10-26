export interface ProjectLink {
  label: string;
  url: string;
}

export interface TechnicalBlock {
  language: string;
  title: string;
  code: string;
}

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  category: "Retention" | "Segmentation" | "Data Preparation" | "Data Storytelling" | "Business Analytics";
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
  technical?: TechnicalBlock[];
}

export const projects: Project[] = [
  {
    slug: "predictive-retention-model",
    title: "Predictive Retention Model",
    subtitle: "Identifying diabetic patients at higher readmission risk",
    category: "Retention",
    image: "/project-retention.jpg",
    problem:
      "Hospitals need an early signal of which diabetic patients are more likely to be readmitted so a care team can review them before they leave. The question is which available variables help flag that risk, and whether a simple model can make the flag usable.",
    data:
      "Patient-level records covering age, previous visits, glucose level, A1C result, number of medications and length of stay. The target variable is readmission (yes / no). Evaluation metrics from the build are not published because they were not recorded in the repository.",
    approach:
      "Explored the relationship between clinical and utilisation features and readmission. Cleaned and prepared the variables, trained a logistic regression classifier in scikit-learn, and wrapped the model in a Streamlit app so a non-technical user can enter a patient profile and see a risk flag. No baseline model comparison or cost analysis of false positives versus missed cases is included in the published version.",
    tools: ["Python", "Pandas", "Scikit-learn", "Streamlit"],
    analysed:
      "Which patient attributes are associated with a higher chance of coming back into hospital, and how a simple, interpretable model can surface that risk for review.",
    findings: [
      "A logistic regression model can produce a usable yes/no readmission flag from a small set of clinical and utilisation features.",
      "The most useful inputs in this build were prior visits, length of stay, medication count and lab markers.",
      "Packaging the model in a simple app made the result usable by someone who does not write Python.",
    ],
    implication:
      "A risk flag is only useful if it arrives early enough for a care team to act, and if the people who need it can actually use it. Model quality metrics are not available here, so the published version shows the workflow rather than proven predictive performance.",
    recommendation:
      "Treat the score as a triage tool for review, not an automatic decision. A care team could use the flag to prioritise high-risk cases for follow-up. Any claim that the model reduced readmissions would require a controlled comparison that is not part of this project.",
    technical: [
      {
        language: "Python",
        title: "Logistic regression for readmission risk",
        code: `from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import classification_report

X = df[["age", "prior_visits", "glucose", "a1c", "meds", "los"]]
y = df["readmitted"]

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)
model = LogisticRegression(max_iter=1000)
model.fit(X_train, y_train)

print(classification_report(y_test, model.predict(X_test)))`,
      },
    ],
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
      "A single message or offer for every user wastes effort. The team needed groups of users who behave differently, so follow-up could match how people actually use the product.",
    data:
      "Demographic and behavioural fields used to describe how users engage, stay and convert. Segment-level KPIs included engagement rate, retention curves and conversion through the funnel.",
    approach:
      "Clustered users with K-Means in Python after preparing and scaling the relevant features. Compared clusters on engagement, retention and conversion. Built a Tableau dashboard so the team could inspect each segment without waiting for a new analysis request.",
    tools: ["Python", "Pandas", "K-Means", "SQL", "Tableau"],
    analysed:
      "How users group by behaviour, how each group moves through the funnel, and which groups are worth different treatments.",
    findings: [
      "Users do not behave as one audience. Clusters separate high-engagement users from those who start strongly and then drop off, and from low-activity users who rarely convert.",
      "Segment-level retention curves make it clearer where a generic campaign is wasted.",
      "A self-service dashboard reduces repeated ad-hoc requests when the team wants to check the same KPIs each week.",
    ],
    implication:
      "Personalisation only works if the segments can be described in business language. A cluster that nobody can explain is not ready for a campaign.",
    recommendation:
      "Give high-engagement users reasons to stay. Reach mid-activity users with prompts tied to the step they abandon. Spend less on broad campaigns aimed at users who have already gone quiet. A public dashboard link is not available for this project.",
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
      "More than 100,000 records that needed to be ingested, cleaned, reshaped and checked before they could support reporting.",
    approach:
      "Built a modular Python (Pandas) pipeline with separate steps for ingestion, cleaning, transformation and validation. Added quality checks so broken or incomplete loads could be caught before they reached a dashboard. Redesigned the analytical tables so common SQL queries did not scan more than they needed.",
    tools: ["Python", "Pandas", "SQL", "ETL", "Data modelling"],
    analysed:
      "Where the raw data was incomplete or inconsistent, what had to change before it was analysis-ready, and how the shape of the tables affected dashboard speed.",
    findings: [
      "Most reporting delays came from cleaning and reshaping work that was repeated by hand.",
      "Validation rules for missing values, unexpected categories and duplicate keys caught issues that would otherwise have appeared as wrong numbers on a dashboard.",
      "A leaner analytical model reduced dashboard query time after the remodel.",
    ],
    implication:
      "A dashboard is only as good as the table behind it. If analysts do not trust the source, they will keep exporting to Excel.",
    recommendation:
      "Treat data quality checks as part of the workflow, not a one-off clean-up. Keep the raw extract, the cleaned table and the quality log separate so problems can be traced. A dedicated public repository for this pipeline is not published yet.",
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
  {
    slug: "menu-engineering-dashboard",
    title: "Menu Engineering & Demand Optimization",
    subtitle: "Revenue, orders and meal-period patterns for Q1 2023",
    category: "Business Analytics",
    image: "/project-menu-engineering.jpg",
    problem:
      "A multi-cuisine restaurant needed a clear view of which cuisines and meal periods drove revenue, orders and quantity sold so menu and staffing decisions could be based on observed demand rather than assumptions. Profitability cannot be assessed from revenue alone without ingredient costs and selling prices.",
    data:
      "Order-level data covering cuisine type (Italian, Asian, Mexican), meal period (Dinner, Lunch, Afternoon, Late), quantity sold, order count and revenue. Key metrics shown: $145.27K revenue, 5K orders, 12K quantity, $27.05 average order value. An Unknown category appears and should be cleaned before decisions are finalised.",
    approach:
      "Built a Power BI dashboard that surfaces revenue, order volume, quantity and average order value, then breaks performance by cuisine and meal period. Used visual comparisons to show where demand concentrates. No item-level contribution or cost data is included in the published view.",
    tools: ["Power BI", "Data visualisation", "Business analysis"],
    analysed:
      "Which cuisines contribute most to revenue, how demand is distributed across meal periods, and whether average order value is consistent or varies by cuisine and time of day.",
    findings: [
      "Revenue is concentrated in specific cuisines and meal periods rather than spread evenly.",
      "Dinner and Lunch periods show higher demand than Afternoon and Late periods.",
      "An Unknown category appears in the data and should be cleaned before menu decisions are finalised.",
      "Average order value sits at $27.05 across the period covered.",
    ],
    implication:
      "Menu and staffing decisions are more reliable when cuisine-level and time-of-day patterns are visible in one place. Revenue concentration is not the same as profit contribution; costs would be needed for that assessment. An uncleaned category can distort totals.",
    recommendation:
      "Prioritise high-revenue cuisine and meal-period combinations for menu prominence and staffing. Investigate and reclassify the Unknown category before the next reporting cycle. Any claim that changes improved margin or reduced waste would require a before-and-after measurement that is not part of this project.",
    technical: [
      {
        language: "DAX",
        title: "Core measures used in the dashboard",
        code: `Revenue = SUM(Orders[Amount])

Orders Count = DISTINCTCOUNT(Orders[OrderID])

Quantity = SUM(Orders[Qty])

AOV = DIVIDE([Revenue], [Orders Count])

Cuisine Revenue % =
DIVIDE(
  [Revenue],
  CALCULATE([Revenue], ALL(Orders[Cuisine]))
)`,
      },
    ],
    links: [
      { label: "View dashboard", url: "/project-menu-engineering.jpg" },
      { label: "Watch video", url: "/menu-engineering.mp4" },
    ],
  },
  {
    slug: "excel-budgeting-tracker",
    title: "Excel Budgeting Tracker",
    subtitle: "A personal finance tool for tracking income, expenses, budgets and category-level spending",
    category: "Business Analytics",
    image: "/project-budgeting.jpg",
    problem:
      "When income and expenses are recorded across different sheets or informal notes, it becomes harder to monitor spending by category, compare expenses against a budget, and identify recurring costs.",
    data:
      "User-entered financial records containing dates, categories, amounts and notes. The workbook organises these entries to support summaries by category and reporting period.",
    approach:
      "Designed a structured Excel workbook using tables, formulas, category-based summaries and data validation to organise financial entries and support consistent tracking.",
    tools: ["Microsoft Excel", "Excel Tables", "Formulas", "Data Validation", "Financial Reporting"],
    analysed:
      "The workbook supports analysis of spending distribution across categories, income and expense totals, and monthly spending against a defined budget.",
    findings: [
      "Structured financial records make it easier to filter transactions and summarise spending by category and period.",
      "Category-level summaries help users identify where their money is going and which expenses may require closer review.",
      "Comparing actual spending with planned budgets can help users identify budget overruns and monitor their financial goals.",
    ],
    implication:
      "The tracker provides a consistent view of personal finances, helping users review spending patterns and make more informed budgeting decisions.",
    recommendation:
      "Record transactions consistently, review category totals regularly, and compare actual spending with planned budgets. Use the findings to identify recurring expenses and adjust future spending plans. The workbook is available for purchase on Selar.",
    links: [
      { label: "View on Selar", url: "https://selar.com/o873s67y48" },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
