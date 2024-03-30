// Methodology.js

function Methodology() {
  return (
    <div className="Methodology">
      <h2 className="MethodologyHeading">Model Development and Evaluation</h2>

      <div>
        <h3 className="MethodologyContentHeading">Version 1.0 - Base Model</h3>
        <p className="MethodologyContent">In the base model version (V1.0), we have streamlined our dataset by eliminating all rows containing missing values to ensure clean and straightforward data for analysis. This initial approach aims to establish a baseline understanding of the dataset and model performance without the complexities introduced by missing data imputation strategies. This reduced the dataset from 26707 to 6437 rows.</p>
        <li className="MethodologyContent">Initial model evaluation without imputation.</li>
        <li className="MethodologyContent">Models: Logistic Regression, RandomForest, GradientBoosting, SVM, XGBoost.</li>
        <li className="MethodologyContent">Data reduced to 6437 rows after removing missing values.</li>
      </div>
      <div className="MethodologyContent">
        <h3>Model Evaluation</h3>
        <p>The performance of each model was meticulously evaluated based on accuracy and ROC AUC scores on the test dataset.</p>
      </div>
      <div className="MethodologyTables">
        <h4>H1N1 Vaccine Prediction Model Performance:</h4>
        <table>
          <tr>
            <th>Model</th>
            <th>Accuracy</th>
            <th>ROC AUC</th>
          </tr>
          <tr>
            <th>Logistic Regression</th>
            <th>0.8315</th>
            <th>0.8773</th>
          </tr>
          <tr>
            <th>RandomForest</th>
            <th>0.8354</th>
            <th>0.8625</th>
          </tr>
          <tr>
            <th>GradientBoosting</th>
            <th>0.8331</th>
            <th>0.8727</th>
          </tr>
          <tr>
            <th>SVM</th>
            <th>0.8300</th>
            <th>0.8752</th>
          </tr>
          <tr>
            <th>XGBoost</th>
            <th>0.8152</th>
            <th>0.8656</th>
          </tr>
        </table>
      </div>

      <div className="MethodologyTables">
        <h4>Seasonal Flu Vaccine Prediction Model Performance:</h4>
        <table>
          <tr>
            <th>Model</th>
            <th>Accuracy</th>
            <th>ROC AUC</th>
          </tr>
          <tr>
            <th>Logistic Regression</th>
            <th>0.7935</th>
            <th>0.8840</th>
          </tr>
          <tr>
            <th>RandomForest</th>
            <th>0.8075</th>
            <th>0.8752</th>
          </tr>
          <tr>
            <th>GradientBoosting</th>
            <th>0.7981</th>
            <th>0.8824</th>
          </tr>
          <tr>
            <th>SVM</th>
            <th>0.7966</th>
            <th>0.8839</th>
          </tr>
          <tr>
            <th>XGBoost</th>
            <th>0.8059</th>
            <th>0.8737</th>
          </tr>
        </table>
      </div>

      <hr/>

      <div>
        <h3 className="MethodologyContentHeading">Version 1.1 - Feature Focused Modeling</h3>
        <p className="MethodologyContent">In this iteration of our project, we concentrated our analysis on features with the highest correlation with our target variables: h1n1_vaccine and seasonal_vaccine. Through exploratory data analysis, we identified several key features that significantly influence vaccination decisions:</p>
        <li className="MethodologyContent">doctor_recc_h1n1</li>
        <li className="MethodologyContent">doctor_recc_seasonal</li>
        <li className="MethodologyContent">opinion_seas_vacc_effective</li>
        <li className="MethodologyContent">opinion_seas_risk</li>
        <p className="MethodologyContent">This focused approach enables a deeper understanding of the factors driving vaccine uptake and improves our models' predictive performance.</p>
      </div>
      <div className="MethodologyContent">
        <h3>Model Performance</h3>
        <p>Evaluating the accuracy of various models provided insight into the effectiveness of our feature-focused approach. Below are the accuracy scores for models predicting H1N1 and Seasonal Flu vaccine uptake.</p>
      </div>

      <div className="MethodologyTables">
        <h4>H1N1 Vaccine Prediction Model Performance:</h4>
        <table>
          <tr>
            <th>Model</th>
            <th>Accuracy</th>
          </tr>
          <tr>
            <th>Logistic Regression</th>
            <th>0.8117</th>
          </tr>
          <tr>
            <th>Support Vector Machine</th>
            <th>0.8106</th>
          </tr>
          <tr>
            <th>Gradient Boosting</th>
            <th>0.8071</th>
          </tr>
          <tr>
            <th>Random Forest</th>
            <th>0.8061</th>
          </tr>
        </table>
      </div>

      <div className="MethodologyTables">
        <h4>Seasonal Flu Vaccine Prediction Model Performance:</h4>
        <table>
          <tr>
            <th>Model</th>
            <th>Accuracy</th>
          </tr>
          <tr>
            <th>Gradient Boosting</th>
            <th>0.7552</th>
          </tr>
          <tr>
            <th>Random Forest</th>
            <th>0.7541</th>
          </tr>
          <tr>
            <th>Support Vector Machine</th>
            <th>0.7460</th>
          </tr>
          <tr>
            <th>Logistic Regression</th>
            <th>0.7460</th>
          </tr>
        </table>
      </div>

      <hr />

      <div>
        <h3 className="MethodologyContentHeading">Version 1.2 - Mean Mode Imputation</h3>
        <p className="MethodologyContent">Recognizing the limitations of discarding rows with missing values, this version adopts imputation methods to fill in missing data. For numerical features, the mean imputation strategy is applied, replacing missing values with the mean value of the respective feature. For categorical features, the mode (most frequent category) imputation is utilized, ensuring that no data point is wasted.</p>
        <li className="MethodologyContent">Implemented mean and mode imputation for numerical and categorical data, respectively.</li>
        <li className="MethodologyContent">Evaluated models: Logistic Regression, RandomForest, GradientBoosting, SVM, XGBoost.</li>
      </div>
      <div className="MethodologyContent">
        <h3>Model Performance</h3>
      </div>
      <div className="MethodologyTables">
        <h4>H1N1 Vaccine Prediction Model Performance:</h4>
        <table>
          <tr>
            <th>Model</th>
            <th>Accuracy</th>
            <th>ROC AUC</th>
          </tr>
          <tr>
            <th>Logistic Regression</th>
            <th>0.8405</th>
            <th>0.8344</th>
          </tr>
          <tr>
            <th>RandomForest</th>
            <th>0.8344</th>
            <th>0.8636</th>
          </tr>
          <tr>
            <th>GradientBoosting</th>
            <th>0.8544</th>
            <th>0.8699</th>
          </tr>
          <tr>
            <th>SVM</th>
            <th>0.8454</th>
            <th>0.8447</th>
          </tr>
          <tr>
            <th>XGBoost</th>
            <th>0.8508</th>
            <th>0.8559</th>
          </tr>
        </table>
      </div>

      <div className="MethodologyTables">
        <h4>Seasonal Flu Vaccine Prediction Model Performance:</h4>
        <table>
          <tr>
            <th>Model</th>
            <th>Accuracy</th>
            <th>ROC AUC</th>
          </tr>
          <tr>
            <th>Logistic Regression</th>
            <th>0.7855</th>
            <th>0.8564</th>
          </tr>
          <tr>
            <th>RandomForest</th>
            <th>0.7785</th>
            <th>0.8540</th>
          </tr>
          <tr>
            <th>GradientBoosting</th>
            <th>0.7918</th>
            <th>0.8635</th>
          </tr>
          <tr>
            <th>SVM</th>
            <th>0.7847</th>
            <th>0.8569</th>
          </tr>
          <tr>
            <th>XGBoost</th>
            <th>0.7830</th>
            <th>0.8573</th>
          </tr>
        </table>
      </div>
      <p className="MethodologyContent">Version 1.2 demonstrates the effectiveness of imputation in enhancing model performance for predicting vaccine uptake. The careful handling of missing data and the application of standardized preprocessing techniques have improved the accuracy and reliability of our predictions.</p>

      <hr />

      <div>
        <h3 className="MethodologyContentHeading">Version 1.3 - The Deployment Model</h3>
        <p className="MethodologyContent">Version 1.3 uses the combination of targeted feature selection and mean mode imputation techniques.</p>
        <li className="MethodologyContent">Identified top correlated features for H1N1 (10 features) and seasonal flu (11 features) vaccine prediction.</li>
        <li className="MethodologyContent">Applied mean-mode imputation for missing data.</li>

        <p className="MethodologyContent">Selected Features:</p>
        <p className="MethodologyContentSubHeading">H1N1</p>
        <li className="MethodologyContent">doctor_recc_h1n1, opinion_h1n1_risk, opinion_h1n1_vacc_effective, opinion_seas_risk, doctor_recc_seasonal, opinion_seas_vacc_effective, health_worker, h1n1_concern, health_insurance, h1n1_knowledge.</li>
        <p className="MethodologyContentSubHeading">Seasonal Flu</p>
        <li className="MethodologyContent">opinion_seas_risk, doctor_recc_seasonal, opinion_seas_vacc_effective, opinion_h1n1_risk, opinion_h1n1_vacc_effective, health_insurance, doctor_recc_h1n1, chronic_med_condition, h1n1_concern, health_worker, behavioral_touch_face.</li>
      </div>
      <div className="MethodologyContent">
        <h3>Model Performance</h3>
      </div>
      <div className="MethodologyTables">
        <h4>H1N1 Vaccine Prediction Model Performance:</h4>
        <table>
          <tr>
            <th>Model</th>
            <th>Accuracy</th>
            <th>ROC AUC</th>
          </tr>
          <tr>
            <th>Logistic Regression</th>
            <th>0.8259</th>
            <th>0.8194</th>
          </tr>
          <tr>
            <th>RandomForest</th>
            <th>0.8235</th>
            <th>0.8101</th>
          </tr>
          <tr>
            <th>GradientBoosting</th>
            <th>0.8422</th>
            <th>0.8540</th>
          </tr>
          <tr>
            <th>SVM</th>
            <th>0.8405</th>
            <th>0.7929</th>
          </tr>
          <tr>
            <th>XGBoost</th>
            <th>0.8414</th>
            <th>0.8399</th>
          </tr>
        </table>
      </div>

      <div className="MethodologyTables">
        <h4>Seasonal Flu Vaccine Prediction Model Performance:</h4>
        <table>
          <tr>
            <th>Model</th>
            <th>Accuracy</th>
            <th>ROC AUC</th>
          </tr>
          <tr>
            <th>Logistic Regression</th>
            <th>0.7535</th>
            <th>0.8259</th>
          </tr>
          <tr>
            <th>RandomForest</th>
            <th>0.7344</th>
            <th>0.7951</th>
          </tr>
          <tr>
            <th>GradientBoosting</th>
            <th>0.7641	</th>
            <th>0.8401</th>
          </tr>
          <tr>
            <th>SVM</th>
            <th>0.7598</th>
            <th>0.8167</th>
          </tr>
          <tr>
            <th>XGBoost</th>
            <th>0.7557</th>
            <th>0.8258</th>
          </tr>
        </table>
      </div>
      <p className="MethodologyContent">We have decided we will go with Gradient Boosting v1.3 for our website, since it has a optimal balance of accuracy and questions asked. Alternatively, while version 1.2 has the highest accuracy, it necessitates asking 36 questions, which we aim to avoid for user convenience.</p>

    </div>
  );
}

export default Methodology;