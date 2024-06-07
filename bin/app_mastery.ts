#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { AppMasteryStack } from '../lib/app_mastery-stack';

const app = new cdk.App();
new AppMasteryStack(app, 'AppMasteryStack', {
  env: { account: '211125589162', region: 'ap-south-1' },
});

const app = new cdk.App();
new AppMasteryStack(app, 'AppMasteryStack');
  

