import React from "react";
import "./Services.scss";
export const AwsInfo = () => {
  return (
    <div>
      <div className="info__heading">AWS Cloud Forensics:</div>
      <ul className="info__ul">
        <ul className="info__li">• IAM Roles and Policies</ul>
        <ul className="info__li">• EC2, S3, Lambda</ul>
        <ul className="info__li">• ECS, RDS, CloudFront</ul>
        <ul className="info__li">• CloudWatch, SNS, SQS</ul>
        <ul className="info__li">
          • Cognito, SSM, Secret Manager, API Gateways
        </ul>
        <ul className="info__li">
          • Auto Scaling, Elastic Load Balancer, Route53
        </ul>
        <ul className="info__li">
          • Code Pipeline, Code Commit, Code Build, Code Deploy
        </ul>
        <ul className="info__li"> • AWS OpsWorks for Chef Automate</ul>
        <ul className="info__li">• AWS Transfer Family for SFTP Solution</ul>
        <ul className="info__li">• AWS FSx, AWS Managed MS Active Directory</ul>
      </ul>
    </div>
  );
};
export const Infra = () => {
  return (
    <div>
      <div className="info__heading">Infrastructure Automation:</div>
      <ul className="info__ul">
        <ul className="info__li">• Terraform</ul>
        <ul className="info__li">• CloudFormation</ul>
        <ul className="info__li">• Serverless Framework</ul>
      </ul>
    </div>
  );
};
export const CICD = () => {
  return (
    <div>
      <div className="info__heading">CI/CD Implementation:</div>
      <ul className="info__ul">
        <ul className="info__li">• Gitlab CI/CD</ul>
        <ul className="info__li">• AWS CodePipeline</ul>
      </ul>
    </div>
  );
};
export const Docker = () => {
  return (
    <div>
      <div className="info__heading">Containerization & Orchestration:</div>
      <ul className="info__ul">
        <ul className="info__li">• Docker</ul>
        <ul className="info__li">• AWS ECR</ul>
        <ul className="info__li">• AWS ECS</ul>
        <ul className="info__li">• Kubernetes</ul>
      </ul>
    </div>
  );
};
export const Log = () => {
  return (
    <div>
      <div className="info__heading">Monitoring & Logging:</div>
      <ul className="info__ul">
        <ul className="info__li">• AWS CloudWatch</ul>
      </ul>
    </div>
  );
};
export const Agile = () => {
  return (
    <div>
      <div className="info__heading">Agile Methodologies:</div>
      <ul className="info__ul">
        <ul className="info__li">• Git</ul>
        <ul className="info__li">• Scrum</ul>
        <ul className="info__li">• Jira / Kanban</ul>
        <ul className="info__li">• Slack</ul>
      </ul>
    </div>
  );
};

export const Dealer = () => {
  return (
    <div>
      <div className="info__heading">Responsibilities:</div>
      <ul className="info__ul">
        <ul className="info__li">
          • Creaated static CSV files delimited by a pipe | to cleanse the data
          and uploaded into an S3 bucket
        </ul>
        <ul className="info__li">
          • Build a Lambda function that kicks off to convert the JSON / CSV
          files (Raw data from vendor uploaded into a landing S3 bucket) into
          Parquet format and stored in a particular partition format prior to
          being marshalled into the S3 bucket
        </ul>
        <ul className="info__li">
          • Crawled the data by AWS Glue to get the schema prior to being pulled
          by Athena, then loads the data partitions and the extra dimensions in
          Athena. Wrote Athena queries to create different Tables, Views and
          Partitions
        </ul>
        <ul className="info__li">
          • Installed Apache Superset that sits as a docker instance on an EC2
          server that then queries directly Athena using PyAthena JDBC. The data
          is then visualised for the end user
        </ul>
      </ul>
    </div>
  );
};
export const Vector = () => {
  return (
    <div>
      <div className="info__heading">Responsibilities:</div>
      <ul className="info__ul">
        <ul className="info__li">
          {" "}
          • Took on the challenge of Infrastructure as Code and Provisioning
          using Terraform resources with modularization structure; Headed-up
          with CI/CD implementation using Terraform Cloud for Infrastructure
          Management with Bitbukcet as Control Version System
        </ul>
        <ul className="info__li">
          {" "}
          • Implemented modules with Terraform of AWS Services including S3, S3
          Bucket Policies, Lambda, IAM Roles & Policies, SGs, ALB, Launch
          Config, ASG, VPC, SFTP, RDS, FSx
        </ul>
        <ul className="info__li">
          {" "}
          • Lift, Shift and Shape of the Application & Utility Servers using AWS
          windows AMI, baked AMIs using Sysprep to lower boot time, used Custom
          AMI’s in terraform scripts
        </ul>
        <ul className="info__li">
          {" "}
          • Bootstrap instances as Chef Nodes, installed base application
          components using custom cookbooks, applied configurational changes
          using Chef Templates through AWS OpsWorks
        </ul>
        <ul className="info__li">
          {" "}
          • Implemented CI/CD using Octopus Deploy. Covered deployment of
          application code by pipelines. Configure instances as a Listening
          Tentacles with Octopus Cloud
        </ul>
        <ul className="info__li">
          {" "}
          • Setup ALB with SSL Termination, configure ALB Rules to route
          requests to multiple Target Groups depending on URL’s. Added instances
          under ALB along with Auto Scalling Groups
        </ul>
        <ul className="info__li">
          {" "}
          • Lift and Shift of File Servers using AWS FSx with AWS Managed Active
          Directory, Migrated FS data using Robocopy cmdline utility. Created
          custom FSx Backups using Lambda and setting up sync process b/w Prod
          and DR using Python cmdline utilities & Task Schedular
        </ul>
        <ul className="info__li">
          {" "}
          • Lift and Shift of SFTP Server using AWS Transfer for SFTP with
          Custom Identity Provider for auth. using API Gateway, Lambda and
          Secret Manager; Whitelisted IP’s of users using VPC Endpoint SG, Added
          provision to add users in bulk & to whitelist IP’s using AWS Lambda
        </ul>
      </ul>
    </div>
  );
};
export const Amway = () => {
  return (
    <div>
      <div className="info__heading">Responsibilities:</div>
      <ul className="info__ul">
        <ul className="info__li">
          {" "}
          • Contrived provisioning of Infrastructure as Code with AWS
          CloudFormation, implemented stacks and nested stacks of different aws
          services
        </ul>
        <ul className="info__li">
          {" "}
          • Created CloudWatch Custom Metrics for EC2 to put memory & disks
          metrics using CW Agent. Create Alarms on basis of CPU & Memory
          Utilization, configure SNS Topic subscribed to Lambda to extract
          relevant info from payload, send email to customer using SES
        </ul>
        <ul className="info__li">
          {" "}
          • Set up the Web ACLs using Regional WAF resources to blocklist IPs
          with different set of Rules and associate Application Load Balancer to
          it
        </ul>
        <ul className="info__li">
          {" "}
          • Created CloudFront Web Distributions with multiple origins, set
          Default Cache Behaviours, use Custom SSL Certificate for HTTPS
          connection using AWS Certificate Manager
        </ul>
        <ul className="info__li">
          {" "}
          • Created Route53 HostedZones and RecordSet of CNAME for the custom
          sub domain of the organization and configure Route53 with CloudFront
          Distribution
        </ul>
        <ul className="info__li">
          {" "}
          • Developed Lambda functions & API-Gateways using Serverless
          framework. Constructed AWS CodePipelines to implement CI/CD practice
          with CFN to deploy Serverless templates
        </ul>
      </ul>
    </div>
  );
};
export const NorthBayLabs = () => {
  return (
    <div>
      <div className="info__heading">Responsibilities:</div>
      <ul className="info__ul">
        <ul className="info__li">
          {" "}
          • Developed cfn-custom-resources which enables to write custom logic
          in cfn templates that will run when on create, update, or delete stack
          operations triggering lambda that provides an extensible set of
          cfn-custom-resources.
        </ul>
        <ul className="info__li">
          {" "}
          • Used AWS SAM to develop, debug, build and deploy serverless
          application templates. Tested the application locally using SAM
          leveraging Docker
        </ul>
        <ul className="info__li">
          {" "}
          • For data security, used KMS with lambda function. Added deploy-stack
          & delete-stack scripts that simplified deployment to Multi Env’s
        </ul>
        <ul className="info__li">
          {" "}
          • Deployed a lambda function that handles the CloudWatch log group
          events, process cfn-custom-resources logs based on log group
          subscription filter provided
        </ul>
        <ul className="info__li">
          {" "}
          • Build, test, and deployed lambda that indexes CloudWatch logs in
          Elasticsearch. Lambda fired off when new log data is available in a
          CloudWatch log group that it is subscribed to. Lambda also augments
          the log information with billed duration, memory usage and max memory
          used
        </ul>
        <ul className="info__li">
          {" "}
          • Used Kibana as a visual interface tool to explore, visualize, and
          build a dashboard over the log data massed in Elasticsearch Clusters
        </ul>
        <ul className="info__li">
          {" "}
          • Develop Lambda Handlers in NodeJS, test cases using Mocha Chai for
          unit and integration testing. Describing application programming
          interface of the code using JSDoc. Use of the ESLint tool for
          identifying and reporting bugs. Check the code coverage with
          istanbul.js/nyc
        </ul>
      </ul>
    </div>
  );
};
export const Keyless = () => {
  return (
    <div>
      <div className="info__heading">Responsibilities:</div>
      <ul className="info__ul">
        <ul className="info__li">
          • Develop fully decentralized solution, following a two-step process
          included Bio-metric authentication through mobile app and Bio-metric
          authentication through decentralized protocol
        </ul>
        <ul className="info__li">
          • Develop Ethereum Wallet Application with bio-metric authentication
          allowing anyone to send and receive Ether and other digital assets
          more conveniently by replacing private keys with bio-metrics
        </ul>
        <ul className="info__li">
          • Develop Modules Layer protocol, multiple independently deploy-able
          modules providing concise authentication functions included PIN-based,
          face recognition based, password-based via the platform’s 'SDK', and
          enable log-in into application
        </ul>
        <ul className="info__li">
          • Building of Ethereum DApps development and making of Ethereum Smart
          Contracts and ERC-20 Tokens
        </ul>
        <ul className="info__li">
          • Tackle the real time problems with block-chain provided solutions
          and research on block-chain and bitcoin core concepts
        </ul>
      </ul>
    </div>
  );
};
export const Freak = () => {
  return (
    <div>
      <div className="info__heading">Responsibilities:</div>
      <ul className="info__ul">
        <ul className="info__li">
          • Lead and Mentored team mates ensuring all were trained in technical
          knowledge and capable of performing assigned duties
        </ul>
        <ul className="info__li">
          • Develop a server that can handle all the information of the users
          including the compilation of the code, applying the test cases and
          generating the results
        </ul>
        <ul className="info__li">
          • Develop the administration end of the website and RESTful APIs in
          ASP.NET Core with routing methodology for CRUD operations of data,
          building of Code Compiler using Microsoft Process Class and Chat
          Module using ASP.NET SignalR library to add the real-time web
          functionality to the application
        </ul>
        <ul className="info__li">
          • Develop the interactive GUI for the user in Angular 6 including the
          admin and user panel for Profile Management, Problem Management, Event
          Management, and Embedded Code Editor
        </ul>
        <ul className="info__li">
          • Designed and model database schema's that holds the information of
          the user and application data using MS SQL Server as database engine
        </ul>
        <ul className="info__li">
          • Design and Develop security protocols for website, implemented the
          security risk using Docker Containers to isolate the processes of
          compilation, also implemented separation of concerns design principle
          in coding
        </ul>
        <ul className="info__li">
          • Integrate the compiler with the mobile app to run the code submitted
          and generate the results on mobile app with basic functionality of
          profile management, score cards and chatting
        </ul>
      </ul>
    </div>
  );
};
