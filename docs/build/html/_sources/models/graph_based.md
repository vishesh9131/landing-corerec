# Graph-Based Models

Graph-based recommendation models leverage the graph structure of user-item interactions and relationships to generate recommendations.

## Overview

Graph-based models treat recommendation as a graph problem:
- **Nodes**: Users and items
- **Edges**: Interactions, relationships, similarities
- **Graph Neural Networks**: Learn node embeddings through message passing

## Available Models

### Core Models

#### GNNRec (Graph Neural Network Recommender)
General graph neural network framework for recommendations.

**Use Cases**: When rich relationship data is available.

#### LightGCN
Lightweight graph convolution network for collaborative filtering.

**Use Cases**: Efficient graph-based collaborative filtering.

### Graph Construction

Graphs can be built from:
- User-item interactions
- Item-item similarities
- User-user similarities
- Knowledge graphs
- Social networks

## Model Characteristics

### Input
- Graph structure (adjacency matrix or edge list)
- Node features (optional)
- Edge weights (optional)

### Output
- Node embeddings (users and items)
- Recommendation scores
- Top-N recommendations

## Training

```python
from corerec.engines.gnnrec import GNNRec

model = GNNRec(
    embedding_dim=64,
    n_layers=3,
    dropout=0.1
)

model.fit(
    user_ids=user_ids,
    item_ids=item_ids,
    ratings=ratings
)
```

## Advantages

- **Relationships**: Captures complex relationships
- **Structure**: Leverages graph structure effectively
- **Scalability**: Can handle large graphs
- **Cold Start**: Can use graph structure for new nodes

## Limitations

- **Graph Quality**: Performance depends on graph construction
- **Computation**: Can be computationally intensive
- **Sparsity**: Very sparse graphs may not work well

## Best Practices

1. **Graph Construction**: Build meaningful graphs
2. **Layers**: 2-4 layers typically work best
3. **Regularization**: Use dropout to prevent overfitting
4. **Sampling**: Use negative sampling for efficiency

## When to Use

- Rich relationship data available
- Social networks or knowledge graphs
- Need to leverage item/item connections
- User-user relationships important

## Tutorials

See graph-based model tutorials in the [Tutorials](../tutorials/index.md) section.

