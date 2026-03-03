# Content-Based Models

Content-based recommendation models use item and user features (text, metadata, attributes) to generate recommendations.

## Production Models

### TFIDFRecommender

TF-IDF based content similarity recommendations. Uses term frequency-inverse document frequency to compute item similarity from text features.

**Use Cases:**
- Text-heavy item catalogs (articles, products with descriptions)
- Cold-start scenarios where interaction data is sparse
- Content discovery based on item attributes

**Key Features:**
- No interaction data required for item similarity
- Fast inference via precomputed similarity matrices
- Works well as a candidate retrieval stage

## Sandbox Models

### MIND-Content

Content-aware variant of the Multi-Interest Network. Extends MIND with content features for richer user interest modeling.

```{admonition} Sandbox Model
:class: warning
MIND-Content is an experimental sandbox model. See the [Sandbox Models](index.md) section for details.
```
