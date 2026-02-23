# Deep Learning Models

CoreRec provides 29+ deep learning-based recommendation models that leverage neural networks to learn complex patterns from user-item interactions.

## Overview

Deep learning models in CoreRec use neural networks to:
- Capture non-linear relationships
- Learn feature interactions automatically
- Handle high-dimensional sparse data
- Model complex user behaviors

## Available Models

### Core Models

#### DCN (Deep & Cross Network)
Combines deep neural networks with cross networks for explicit feature interactions.

**Use Cases**: When you need both memorization and generalization.

#### DeepFM
Factorization Machines + Deep Neural Networks for feature interaction learning.

**Use Cases**: General-purpose recommendation with mixed feature types.

#### DIEN (Deep Interest Evolution Network)
Models user interest evolution over time using attention mechanisms.

**Use Cases**: E-commerce, content platforms with temporal user behavior.

#### DIN (Deep Interest Network)
Uses attention to model diverse user interests.

**Use Cases**: When users have multiple interests.

#### DLRM (Deep Learning Recommendation Model)
Facebook's production model for recommendation.

**Use Cases**: Large-scale recommendation systems.

### Specialized Models

- **GNNRec**: Graph Neural Networks for recommendations
- **MIND**: Multi-Interest Network for diverse recommendations
- **NASRec**: Neural Architecture Search for optimal architectures
- **SASRec**: Self-Attentive Sequential Recommendation
- **YouTubeDNN**: Deep Neural Networks for YouTube-style recommendations

### Feature Interaction Models

- **AFM**: Attentional Factorization Machines
- **AutoInt**: Automatic Feature Interaction Learning
- **FIBINet**: Feature Importance and Bilinear feature Interaction Network
- **PNN**: Product-based Neural Networks
- **xDeepFM**: Compressed Interaction Network

### Multi-Task Models

- **ESMM**: Entire Space Multi-Task Model
- **MMoE**: Multi-gate Mixture-of-Experts
- **PLE**: Progressive Layered Extraction

## Model Characteristics

### Input Types
- User IDs
- Item IDs
- Categorical features
- Numerical features
- Sequential data (for sequential models)

### Output
- Rating predictions
- Ranking scores
- Top-N recommendations

## Training

All deep learning models follow the same training pattern:

```python
from corerec.engines.dcn import DCN

model = DCN(
    embedding_dim=64,
    epochs=20,
    learning_rate=0.001
)

model.fit(
    user_ids=user_ids,
    item_ids=item_ids,
    ratings=ratings
)
```

## Performance Considerations

- **Training Time**: Varies by model complexity (minutes to hours)
- **Memory**: Depends on embedding dimensions and batch size
- **Inference**: Fast once trained (milliseconds per prediction)

## Best Practices

1. **Start Simple**: Begin with DeepFM or DCN
2. **Tune Embeddings**: Embedding dimension affects performance
3. **Regularization**: Use dropout to prevent overfitting
4. **Batch Size**: Adjust based on available memory
5. **Learning Rate**: Start with 0.001 and adjust

## Tutorials

See individual model tutorials in the [Tutorials](../tutorials/index.md) section.

