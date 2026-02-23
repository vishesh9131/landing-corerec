# Model Documentation

Welcome to the CoreRec model documentation. This section provides detailed information about all available recommendation models.

## Model Categories

CoreRec provides 57+ production-ready models organized into the following categories:

### [Deep Learning Models](deep_learning.md)
Neural network-based recommendation models that learn complex patterns from user-item interactions.

**Key Models**: DCN, DeepFM, DIEN, DIN, DLRM, GNNRec, MIND, NASRec, SASRec, and more.

### [Matrix Factorization](matrix_factorization.md)
Classic collaborative filtering approaches using matrix decomposition.

**Key Models**: SVD, ALS, Matrix Factorization, and variants.

### [Graph-Based Models](graph_based.md)
Models that leverage graph structure and relationships.

**Key Models**: GNNRec, LightGCN, Graph Neural Networks.

### [Sequential Models](sequential.md)
Time-aware models that consider user behavior sequences.

**Key Models**: SASRec, MIND, RBM, SAR, NextItNet.

### [Bayesian Models](bayesian.md)
Probabilistic approaches to recommendation.

**Key Models**: BPR, BPRMF, VMF.

## Quick Reference

### Core Engine Models

- **DCN** - Deep & Cross Network for feature interactions
- **DeepFM** - Factorization Machines combined with Deep Neural Networks
- **GNNRec** - Graph Neural Networks for recommendations
- **MIND** - Multi-Interest Network for diverse recommendations
- **NASRec** - Neural Architecture Search for recommendations
- **SASRec** - Self-Attentive Sequential Recommendation

## Model Selection Guide

### When to Use Deep Learning Models
- Large datasets with complex patterns
- Rich feature sets available
- Need to capture non-linear relationships

### When to Use Matrix Factorization
- Sparse user-item matrices
- Need interpretable recommendations
- Fast training and inference required

### When to Use Graph-Based Models
- Rich relationship data available
- Social networks or knowledge graphs
- Need to leverage item/item or user/user connections

### When to Use Sequential Models
- Temporal patterns important
- User behavior sequences available
- Need next-item prediction

### When to Use Bayesian Models
- Uncertainty quantification needed
- Probabilistic interpretation desired
- Cold start problems

## Getting Started

1. Choose a model category based on your needs
2. Read the specific model documentation
3. Check out the tutorial examples
4. Start with a simple model and iterate

## Tutorials

For hands-on examples, see the [Tutorials](../tutorials/index.md) section.

