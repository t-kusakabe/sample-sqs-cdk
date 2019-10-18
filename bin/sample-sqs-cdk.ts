#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/core');
import { SqsStack } from '../lib/sqs-stack';

const app = new cdk.App();
new SqsStack(app, 'SqsStack');
