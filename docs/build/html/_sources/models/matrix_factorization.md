# Matrix Factorization Models

Matrix factorization is a classic collaborative filtering approach that decomposes the user-item interaction matrix into lower-dimensional representations.

## Overview

Matrix factorization models learn:
- **User embeddings**: Low-dimensional representations of users
- **Item embeddings**: Low-dimensional representations of items
- **Latent factors**: Hidden features that explain user preferences

## Available Models

### Core Models

#### SVD (Singular Value Decomposition)
Classic matrix factorization using SVD decomposition.

**Use Cases**: Baseline recommendation, interpretable factors.

#### ALS (Alternating Least Squares)
Efficient matrix factorization using alternating optimization.

**Use Cases**: Large-scale collaborative filtering, fast training.

#### Matrix Factorization
Standard matrix factorization with various optimization methods.

**Use Cases**: General collaborative filtering.

### Variants

- **Bayesian Matrix Factorization**: Probabilistic approach
- **Weighted Matrix Factorization**: Handling missing data
- **Non-negative Matrix Factorization**: For non-negative ratings

## Model Characteristics

### Input
- User-item interaction matrix (ratings, clicks, views)
- Sparse matrix format supported

### Output
- User and item embeddings
- Rating predictions
- Top-N recommendations

## Training

```python
from corerec.engines.unionizedFilterEngine.mf_base.als_recommender import ALSRecommender

model = ALSRecommender(
    n_factors=50,
    n_iterations=20,
    regularization=0.1
)

model.fit(user_item_matrix)
```

## Advantages

- **Interpretable**: Latent factors can be analyzed
- **Fast**: Efficient training and inference
- **Scalable**: Works well with large datasets
- **Cold Start**: Can handle new users/items with proper initialization

## Limitations

- **Sparsity**: Struggles with very sparse data
- **Linearity**: Assumes linear relationships
- **Features**: Doesn't use item/user features directly

## Best Practices

1. **Factor Count**: Start with 50-100 factors
2. **Regularization**: Prevent overfitting with L2 regularization
3. **Initialization**: Use proper initialization for embeddings
4. **Normalization**: Normalize ratings for better performance

## When to Use

- Baseline recommendation system
- Need fast training and inference
- Interpretable recommendations required
- Large-scale collaborative filtering

## Tutorials

See matrix factorization tutorials in the [Tutorials](../tutorials/index.md) section.

