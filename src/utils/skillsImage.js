import gcp from '../assets/svg/skills/gcp.svg'
import html from '../assets/svg/skills/html.svg'
import docker from '../assets/svg/skills/docker.svg'
import css from '../assets/svg/skills/css.svg'
import javascript from '../assets/svg/skills/javascript.svg'
import typescript from '../assets/svg/skills/typescript.svg'
import bootstrap from '../assets/svg/skills/bootstrap.svg'
import mongoDB from '../assets/svg/skills/mongoDB.svg'
import mysql from '../assets/svg/skills/mysql.svg'
import postgresql from '../assets/svg/skills/postgresql.svg'
import cplusplus from '../assets/svg/skills/cplusplus.svg'
import java from '../assets/svg/skills/java.svg'
import matlab from '../assets/svg/skills/matlab.svg'
import graphql from '../assets/svg/skills/graphql.svg'


import python from '../assets/svg/skills/python.svg'
import aws from '../assets/svg/skills/aws.svg'
import git from '../assets/svg/skills/git.svg'
import numpy from '../assets/svg/skills/numpy.svg'
import opencv from '../assets/svg/skills/opencv.svg'
import pytorch from '../assets/svg/skills/pytorch.svg'
import tensorflow from '../assets/svg/skills/tensorflow.svg'
import azure from '../assets/svg/skills/azure.svg'

import jupyter from '../assets/svg/skills/jupyter.svg'
import pandas from '../assets/svg/skills/pandas.svg'
import matplotlib from '../assets/svg/skills/matplotlib.svg'
import seaborn from '../assets/svg/skills/seaborn.svg'
import tableau from '../assets/svg/skills/tableau.svg'
import powerbi from '../assets/svg/skills/powerbi.svg'
import scikitlearn from '../assets/svg/skills/scikitlearn.svg'
import keras from '../assets/svg/skills/keras.svg'
import xgboost from '../assets/svg/skills/xgboost.svg'
import spacy from '../assets/svg/skills/spacy.svg'
import mlflow from '../assets/svg/skills/mlflow.svg'
import statsmodels from '../assets/svg/skills/statsmodels.svg'
import nltk from '../assets/svg/skills/nltk.svg'
import ubuntu from '../assets/svg/skills/ubuntu.svg'

import XGBoost from '../assets/svg/skills/xgboost.svg'



export const skillsImage = (skill) => {
    const skillID = skill.toLowerCase();
    switch (skillID) {
        case 'python':
            return python;
        case 'gcp':
            return gcp;
        case 'html':
            return html;
        case 'docker':
            return docker;
        case 'css':
            return css;
        case 'javascript':
            return javascript;
        case 'typescript':
            return typescript;
        case 'bootstrap':
            return bootstrap;
        case 'mongodb':
            return mongoDB;
        case 'mysql':
            return mysql;
        case 'postgresql':
            return postgresql;
        case 'c++':
            return cplusplus;
        case 'java':
            return java;
        case 'matlab':
            return matlab;
        case 'aws':
            return aws;
        case 'git':
            return git;
        case 'numpy':
            return numpy;
        case 'opencv':
            return opencv;
        case 'pytorch':
            return pytorch;
        case 'tensorflow':
            return tensorflow;
        case 'azure':
            return azure;
        case 'graphql':
                return graphql;
        case 'jupyter notebook':
            return jupyter;
        case 'pandas':
            return pandas;
        case 'matplotlib':
            return matplotlib;
        case 'seaborn':
            return seaborn;
        case 'tableau':
            return tableau;
        case 'power bi':
            return powerbi;
        case 'scikit-learn':
            return scikitlearn;
        case 'keras':
            return keras;
        case 'xgboost':
            return xgboost;
        case 'spacy':
            return spacy;
        case 'mlflow':
            return mlflow;
        case 'statsmodels':
            return statsmodels;
        case 'nltk':
            return nltk;
        case 'ubuntu':
            return ubuntu;
        default:
            break;
    }
}
