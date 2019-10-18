#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/core');
import { SampleSqsCdkStack } from '../lib/sample-sqs-cdk-stack';

const app = new cdk.App();
new SampleSqsCdkStack(app, 'SampleSqsCdkStack');
