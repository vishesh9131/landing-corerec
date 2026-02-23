# Sequential Models

Sequential recommendation models consider the order and timing of user interactions to predict the next item a user might be interested in.

## Overview

Sequential models capture:
- **Temporal patterns**: How user preferences change over time
- **Sequence dependencies**: How previous items influence next choices
- **Behavior evolution**: User interest evolution

## Available Models

### Core Models

#### SASRec (Self-Attentive Sequential Recommendation)
Uses self-attention mechanism to model item sequences.

**Use Cases**: E-commerce, content platforms with sequential behavior.

#### MIND (Multi-Interest Network)
Models multiple user interests and their evolution.

**Use Cases**: Diverse recommendation needs, multiple interests.

#### RBM (Recurrent Behavior Model)
Uses recurrent neural networks for sequential modeling.

**Use Cases**: When sequence order is critical.

#### SAR (Sequential Association Rules)
Rule-based sequential recommendation.

**Use Cases**: Fast sequential recommendations, interpretable rules.

#### NextItNet
Convolutional sequence model for next-item prediction.

**Use Cases**: When local patterns in sequences matter.

### Model Types

- **Attention-based**: SASRec, MIND
- **RNN-based**: RBM, GRU-based models
- **CNN-based**: NextItNet, Caser
- **Rule-based**: SAR

## Model Characteristics

### Input
- User interaction sequences (ordered item lists)
- Timestamps (optional)
- Session data (optional)

### Output
- Next item predictions
- Sequence embeddings
- Top-N recommendations

## Training

```python
from corerec.engines.sasrec import SASRec

model = SASRec(
    embedding_dim=64,
    n_layers=2,
    n_heads=2,
    max_len=50
)

model.fit(
    user_sequences=sequences,
    item_ids=item_ids
)
```

## Advantages

- **Temporal**: Captures time-based patterns
- **Context**: Uses sequence context effectively
- **Personalization**: Adapts to user behavior changes
- **Next-Item**: Optimized for next-item prediction

## Limitations

- **Sequence Length**: Limited by maximum sequence length
- **Cold Start**: New users have no sequence history
- **Computation**: Can be slower than non-sequential models

## Best Practices

1. **Sequence Length**: Use 20-100 items typically
2. **Padding**: Handle variable-length sequences properly
3. **Masking**: Mask future items during training
4. **Position Encoding**: Use position encodings for order

## When to Use

- Temporal patterns important
- User behavior sequences available
- Need next-item prediction
- Session-based recommendations

## Tutorials

See sequential model tutorials in the [Tutorials](../tutorials/index.md) section.

