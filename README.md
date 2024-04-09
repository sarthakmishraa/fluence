# Fluence: Flu Shot Learning

Check out our web app: https://flu-ence.netlify.app/

## Table of Contents

1. [Background and Challenge](#background-and-challenge)
2. [Objective](#objective)
3. [Data Source](#data-source)
4. [Survey Insights](#survey-insights)
   - [Correlation Matrix](#correlation-matrix)
   - [Understanding Data: General Metrics](#understanding-data-general-metrics)
     - [H1N1 and Seasonal Flu Vaccination Rates](#h1n1-and-seasonal-flu-vaccination-rates)
     - [Usage of Face Masks](#usage-of-face-masks)
     - [Levels of Concern and Knowledge about H1N1](#levels-of-concern-and-knowledge-about-h1n1)
     - [Doctor Recommendations on Vaccinations and Its Influence](#doctor-recommendations-on-vaccinations-and-its-influence)
     - [Opinions on Vaccine Effectiveness](#opinions-on-vaccine-effectiveness)
   - [Socioeconomic Factors](#socioeconomic-factors)
     - [H1N1 Vaccination Dependency on Socioeconomic Factors](#h1n1-vaccination-dependency-on-socioeconomic-factors)
     - [Seasonal Vaccination Dependency on Socioeconomic Factors](#seasonal-vaccination-dependency-on-socioeconomic-factors)
5. [Model Development and Evaluation](#model-development-and-evaluation)
   - [Version 1.0 - Base Model](#version-10---base-model)
   - [Version 1.1 - Feature Focused Modeling](#version-11---feature-focused-modeling)
   - [Version 1.2 - Mean Mode Imputation](#version-12---mean-mode-imputation)
   - [Version 1.3](#version-13)
6. [Conclusion](#conclusion)
7. [Technology Stack](#technology-stack)
8. [Contributors](#contributors)


## Background and Challenge:

Public health measures, particularly vaccination, play a pivotal role in combating infectious diseases. Vaccination not only confers immunity to individuals but also contributes to the broader "herd immunity," essential for reducing disease spread within communities.

This project is inspired by the response to the H1N1 influenza pandemic, also known as "swine flu," which emerged in the spring of 2009. The pandemic highlighted the global challenge of responding to infectious disease outbreaks, with the H1N1 virus causing an estimated 151,000 to 575,000 deaths worldwide in its first year alone.

By October 2009, a vaccine against the H1N1 flu virus was made available to the public. The United States' National 2009 H1N1 Flu Survey, conducted in late 2009 and early 2010, forms the basis of our dataset. This phone survey collected data on whether respondents received the H1N1 and seasonal flu vaccines, alongside questions about their demographics, opinions on vaccine efficacy and illness risks, and behaviors related to transmission mitigation.

Understanding the relationships between these characteristics and vaccination behavior can provide invaluable insights for future public health initiatives. As the world faces new health challenges, including the development of vaccines for emerging diseases like COVID-19, lessons learned from past pandemics remain highly relevant.

## Objective:

The primary goal of this challenge is to predict individuals' H1N1 and seasonal flu vaccination status based on information shared about their backgrounds, opinions, and health behaviors. By leveraging machine learning models to analyze the survey data, we aim to uncover patterns and factors that influence vaccination decisions. These insights could guide public health strategies to enhance vaccine uptake and manage disease spread effectively.

## Data Source:

The dataset for this challenge comes from DrivenData's "Flu Shot Learning" practice competition, which revisits the public health response to the H1N1 pandemic using data from the National 2009 H1N1 Flu Survey. More details about the competition and dataset can be found here: https://www.drivendata.org/competitions/66/flu-shot-learning/

## Survey Insights: 

### Correlation Matrix

<img src="https://github.com/adiimated/Flu-Shot-Learning/blob/main/visualizations/corr_matrix.png" width="700">

We can see that most of the variables are loosely correlated to the target variables. There are certain features that show a higher degree of correlation with the `'seasonal_vaccine'` and '`h1n1_vaccine'`, such as `'doctor_recc_h1n1'`, `'doctor_recc_seasonal'`, and `'opinion_h1n1_vacc_effective'`. It's important to note correlations between 'behavioral' features and vaccination status, as well as between 'opinion' features and vaccination status, as these can reveal how behaviors and opinions may influence the likelihood of getting vaccinated.

### Understanding Data: General Metrics

#### H1N1 and Seasonal Flu Vaccination Rates

<img src ="https://github.com/adiimated/Flu-Shot-Learning/blob/main/visualizations/h1n1_vacc_status.png" width="400">

* Vaccinated: 21.2% of the respondents have been vaccinated against H1N1.
* Not Vaccinated: 78.8% of the respondents have not been vaccinated against H1N1.

<img src ="https://github.com/adiimated/Flu-Shot-Learning/blob/main/visualizations/seasonal_vacc_status.png" width="400">

* Vaccinated: 46.6% of the respondents have been vaccinated for the seasonal flu.
* Not Vaccinated: 53.4% of the respondents have not been vaccinated for the seasonal flu.

From these visualizations, we can infer that a larger proportion of the respondents have chosen to get vaccinated for the seasonal flu compared to H1N1. While almost half of the respondents are vaccinated against seasonal flu, only about a fifth are vaccinated against H1N1. This could indicate a variety of things, such as:

1. A higher perceived risk or more widespread public health campaigns concerning seasonal flu.
2. Greater availability or accessibility of the seasonal flu vaccine.
3. Possible public hesitancy or lack of information regarding the H1N1 vaccine.

#### Usage of Face Masks

<img src="https://github.com/adiimated/Flu-Shot-Learning/blob/main/visualizations/face_masks.png" width="400">

This disparity suggests that during the time of data collection, face mask usage was not widespread among the surveyed population. This could be due to various reasons such as lack of awareness, unavailability, discomfort, cultural reasons, or because it was not recommended or mandated by health authorities at that time.

### Levels of Concern and Knowledge about H1N1

<img src="https://github.com/adiimated/Flu-Shot-Learning/blob/main/visualizations/levels_of_concern.png" wisth="700">

From these graphs, we can infer that while there is a general level of concern about the H1N1 flu among the respondents, most of them only have a little knowledge about it. This suggests there may be a need for educational campaigns to increase the level of knowledge, which could potentially influence the level of concern and possibly the actions taken in response to the flu, such as vaccination or other preventive measures.

### Doctor Recommendations on Vaccinations and Its Influence

<img src="https://github.com/adiimated/Flu-Shot-Learning/blob/main/visualizations/doctor_rec.png" width="700">

`Doctor Recommendations for H1N1 Vaccine:`
1. A significantly smaller number of respondents received a doctor's recommendation for the H1N1 vaccine compared to those who did not.
2. This could indicate that there might have been less perceived urgency or risk associated with the H1N1 virus among the doctors or the respondents' population at the time of the survey.

`Doctor Recommendations for Seasonal Flu Vaccine:`
1. The difference between those who received a recommendation for the seasonal flu vaccine and those who did not is less stark than with the H1N1 vaccine.
2. A substantial number of respondents still did not receive a doctor's recommendation for the seasonal flu vaccine, but the number of recommendations is higher compared to the H1N1 vaccine.
3. This suggests that doctors might be more consistent or active in recommending the seasonal flu vaccine, possibly due to established routines, perceived higher risk of seasonal flu, or because it is a more routine part of preventive health care.

### Opinions on Vaccine Effectiveness

![opinions](https://github.com/adiimated/Flu-Shot-Learning/blob/main/visualizations/opinions.png)

`Observations:` 
This graph shows that the majority of respondents believe the H1N1 vaccine to be "Somewhat effective," with this category having the highest number of respondents. The second-largest group of respondents selected "Don't know," indicating uncertainty or lack of knowledge about the vaccine's effectiveness. A smaller number of respondents believe the vaccine is "Very effective," while very few think it is "Not very effective" or "Not at all effective."

In contrast, the opinions on the seasonal flu vaccine show that most respondents believe it to be "Very effective," which is the highest bar on this graph. The second-highest category is "Somewhat effective," followed by a much smaller number of respondents who selected "Don't know." Very few respondents believe the seasonal flu vaccine is "Not very effective" or "Not at all effective."

`Inference:`
The seasonal flu vaccine is viewed as more effective by the respondents compared to the H1N1 vaccine. The "Don't know" category in both graphs suggests that there is a significant amount of uncertainty or lack of information among the respondents about the effectiveness of both vaccines.

### Socioeconomic Factors
### H1N1 Vaccination Dependency on Socioeconomic Factors

#### *Age Group :*

<img src="https://github.com/adiimated/Flu-Shot-Learning/blob/main/visualizations/h1n1_age_group.png" width="600">

Vaccination rates appear to increase with age, with the `65+ years` age group showing the largest number of vaccinated respondents relative to other age groups. The age group with the lowest vaccination rate appears to be the `35-44 years` group.

#### *Employment Status:*

<img src="https://github.com/adiimated/Flu-Shot-Learning/blob/main/visualizations/h1n1_emp_status.png" width="600">

Employment status appears to have an association with vaccination rates, with those "Not in Labor Force" and "Employed" having a higher number of unvaccinated individuals. The "Unemployed" group has the lowest overall numbers, which could indicate a smaller sample size or lower vaccination rates among this group. The disparity between vaccinated and unvaccinated individuals is particularly pronounced in the "Not in Labor Force" group, which could suggest various factors at play such as age, disability, or retirement status that may influence vaccination rates.

#### *Education level:* 

<img src="https://github.com/adiimated/Flu-Shot-Learning/blob/main/visualizations/h1n1_education.png" width="600">

This chart suggests a correlation between education level and vaccination rates, indicating that individuals with higher education levels may be more likely to get vaccinated. This could be due to a variety of factors, such as better access to information, understanding of health and science, or socioeconomic status that often correlates with education level. These insights could be vital for public health officials in designing education and outreach programs tailored to different educational backgrounds to improve vaccination coverage.

#### *Income Level:* 

<img src="https://github.com/adiimated/Flu-Shot-Learning/blob/main/visualizations/h1n1_income.png" width="600">

Income level seems to correlate with vaccination rates, with higher income brackets possibly having better access to vaccines or more inclination to get vaccinated. Despite the absolute numbers, the proportion of vaccinated to not vaccinated in the highest income bracket suggests that increased income could be associated with higher vaccination rates. The `"<=$75,000 Above Poverty"` group represents the largest segment in terms of raw numbers for both vaccinated and not vaccinated, indicating this group may be the most significant target for public health interventions.

### Seasonal Vaccination Dependency on Socioeconomic Factors

#### *Age Group :*

<img src="https://github.com/adiimated/Flu-Shot-Learning/blob/main/visualizations/seasonal_age.png" width="600">

The graph suggests a trend where the likelihood of having received the seasonal flu vaccine increases with age. Younger age groups appear to have lower vaccination rates, while older individuals show much higher rates of vaccination. This could be due to several factors, such as increased risk of complications from the flu in older adults, making vaccination more common in this demographic.

#### *Employment Status:*

<img src="https://github.com/adiimated/Flu-Shot-Learning/blob/main/visualizations/seasonal_emp_status.png" width="600">

From this graph, we can infer that employment status is a factor in seasonal vaccination rates, with employed individuals being more likely to be vaccinated than those not in the labor force or unemployed. This might suggest that employed individuals have better access to vaccines, possibly through workplace vaccination programs, or they might prioritize vaccination due to workplace requirements or health benefits. Conversely, the lower rates of vaccination among the unemployed could be due to factors like lower access to healthcare services or other priorities.

#### *Education level:* 

<img src="https://github.com/adiimated/Flu-Shot-Learning/blob/main/visualizations/seasonal_education.png" width="600">

This data indicates that higher education levels might be associated with higher rates of seasonal flu vaccination. In particular, respondents with a college degree are more likely to be vaccinated than those with less education. This trend could be due to a variety of factors, including increased health awareness and access to health resources among individuals with higher education levels.

#### *Income Level:* 

<img src="https://github.com/adiimated/Flu-Shot-Learning/blob/main/visualizations/seasonal_income.png" width="600">

Income appears to be a factor in the likelihood of getting vaccinated, with lower-income groups showing a lower rate of vaccination. The difference in vaccination rates is less pronounced in the highest income bracket, suggesting that higher income may be associated with better access to healthcare or greater health-seeking behavior. Overall, even at higher income levels, there seems to be a substantial number of individuals who are not getting vaccinated, indicating that factors other than income might also play a significant role in the decision to get vaccinated.

## Model Development and Evaluation
## Version 1.0 - Base Model

In the base model version (V1.0), we have streamlined our dataset by eliminating all rows containing missing values to ensure clean and straightforward data for analysis. This initial approach aims to establish a baseline understanding of the dataset and model performance without the complexities introduced by missing data imputation strategies. This reduced the dataset from 26707 to 6437 rows.

- Initial model evaluation without imputation.
- Models: Logistic Regression, RandomForest, GradientBoosting, SVM, XGBoost.
- Data reduced to `6437 rows` after removing missing values.

### Model Evaluation

The performance of each model was meticulously evaluated based on accuracy and ROC AUC scores on the test dataset. 

H1N1 Vaccine Prediction Model Performance:

| Model              | Accuracy | ROC AUC |
|--------------------|----------|---------|
| Logistic Regression| 0.8315   | 0.8773  |
| RandomForest       | 0.8354   | 0.8625  |
| GradientBoosting   | 0.8331   | 0.8727  |
| SVM                | 0.8300   | 0.8752  |
| XGBoost            | 0.8152   | 0.8656  |

Seasonal Flu Vaccine Prediction Model Performance:

| Model              | Accuracy | ROC AUC |
|--------------------|----------|---------|
| Logistic Regression| 0.7935   | 0.8840  |
| RandomForest       | 0.8075   | 0.8752  |
| GradientBoosting   | 0.7981   | 0.8824  |
| SVM                | 0.7966   | 0.8839  |
| XGBoost            | 0.8059   | 0.8737  |


## Version 1.1 - Feature Focused Modeling

In this iteration of our project, we concentrated our analysis on features with the highest correlation with our target variables: `h1n1_vaccine` and `seasonal_vaccine`. Through exploratory data analysis, we identified several key features that significantly influence vaccination decisions:

- `doctor_recc_h1n1`
- `doctor_recc_seasonal`
- `opinion_seas_vacc_effective`
- `opinion_seas_risk`

This focused approach enables a deeper understanding of the factors driving vaccine uptake and improves our models' predictive performance.

### Model Performance

Evaluating the accuracy of various models provided insight into the effectiveness of our feature-focused approach. Below are the accuracy scores for models predicting H1N1 and Seasonal Flu vaccine uptake.

H1N1 Vaccine Prediction Model Performance:

| Model                | Accuracy |
|----------------------|----------|
| Logistic Regression  | 0.8117   |
| Support Vector Machine | 0.8106 |
| Gradient Boosting    | 0.8071   |
| Random Forest        | 0.8061   |

Seasonal Flu Vaccine Prediction Model Performance:

| Model                | Accuracy |
|----------------------|----------|
| Gradient Boosting    | 0.7552   |
| Random Forest        | 0.7541   |
| Support Vector Machine | 0.7460 |
| Logistic Regression  | 0.7460   |

## Version 1.2 - Mean Mode Imputation

Recognizing the limitations of discarding rows with missing values, this version adopts imputation methods to fill in missing data. For numerical features, the mean imputation strategy is applied, replacing missing values with the mean value of the respective feature. For categorical features, the mode (most frequent category) imputation is utilized, ensuring that no data point is wasted.

- Implemented `mean and mode imputation` for numerical and categorical data, respectively.
- Evaluated models: Logistic Regression, RandomForest, GradientBoosting, SVM, XGBoost.

### Model Performance

H1N1 Vaccine Prediction Model Performance

| Model               | Accuracy | ROC AUC |
|---------------------|----------|---------|
| Logistic Regression | 0.8405   | 0.8344  |
| RandomForest        | 0.8504   | 0.8636  |
| GradientBoosting    | 0.8544   | 0.8699  |
| SVM                 | 0.8454   | 0.8447  |
| XGBoost             | 0.8508   | 0.8559  |

Seasonal Flu Vaccine Prediction Model Performance

| Model               | Accuracy | ROC AUC |
|---------------------|----------|---------|
| Logistic Regression | 0.7855   | 0.8564  |
| RandomForest        | 0.7785   | 0.8540  |
| GradientBoosting    | 0.7918   | 0.8635  |
| SVM                 | 0.7847   | 0.8569  |
| XGBoost             | 0.7830   | 0.8573  |

Version 1.2 demonstrates the effectiveness of imputation in enhancing model performance for predicting vaccine uptake. The careful handling of missing data and the application of standardized preprocessing techniques have improved the accuracy and reliability of our predictions.

## Version 1.3
Version 1.3 uses the combination of targeted feature selection and mean mode imputation techniques. 

- Identified top correlated features for H1N1 (10 features) and seasonal flu (11 features) vaccine prediction.
- Applied mean-mode imputation for missing data.

Selected Features:

H1N1
- `doctor_recc_h1n1`, `opinion_h1n1_risk`, `opinion_h1n1_vacc_effective`, `opinion_seas_risk`, `doctor_recc_seasonal`, `opinion_seas_vacc_effective`, `health_worker`, `h1n1_concern`, `health_insurance`, `h1n1_knowledge`.

Seasonal Flu
- `opinion_seas_risk`, `doctor_recc_seasonal`, `opinion_seas_vacc_effective`, `opinion_h1n1_risk`, `opinion_h1n1_vacc_effective`, `health_insurance`, `doctor_recc_h1n1`, `chronic_med_condition`, `h1n1_concern`, `health_worker`, `behavioral_touch_face`.

### Model Performance

H1N1 Vaccine Prediction Prediction Model Performance

| Model             | Accuracy | ROC AUC |
|-------------------|----------|---------|
| Logistic Regression | 0.8259   | 0.8194  |
| Random Forest       | 0.8235   | 0.8101  |
| Gradient Boosting   | 0.8422   | 0.8540  |
| SVM                 | 0.8405   | 0.7929  |
| XGBoost             | 0.8414   | 0.8399  |

Seasonal Flu Vaccine Prediction Model Performance

| Model             | Accuracy | ROC AUC |
|-------------------|----------|---------|
| Logistic Regression | 0.7535   | 0.8259  |
| Random Forest       | 0.7344   | 0.7951  |
| Gradient Boosting   | 0.7641   | 0.8401  |
| SVM                 | 0.7598   | 0.8167  |
| XGBoost             | 0.7557   | 0.8258  |

We have decided we will go with `Gradient Boosting v1.3` for our website, since it has a optimal balance of accuracy and questions asked. Alternatively, while version 1.2 has the highest accuracy, it necessitates asking 36 questions, which we aim to avoid for user convenience.

## Technology Stack

Fluence is built using a combination of modern technologies designed for high performance and scalability:

- **Frontend:** [ReactJS](https://reactjs.org/) - A JavaScript library for building user interfaces, chosen for its efficiency and reusable components.
- **Backend:** [Flask](http://flask.pocoo.org/) - A lightweight WSGI web application framework in Python, used for its simplicity and flexibility in handling API requests and serving data.
- **Programming Language:** [Python](https://www.python.org/) - Utilized for machine learning model development, data processing, and backend services, leveraging libraries such as Pandas, Scikit-learn, and Matplotlib.
- **Deployment:** 
  - **Backend Deployment:** [Render](https://render.com/) - Provides instant hosting and auto-scaling for our Flask backend.
  - **Frontend Hosting:** [Netlify](https://www.netlify.com/) - Used for its continuous deployment from Git, ensuring a seamless update process for our ReactJS frontend.

Our choice of technologies reflects our commitment to a responsive, user-friendly platform that leverages machine learning for public health insights.

## Contributors
Sarthak Mishra and Pratiksha Naik