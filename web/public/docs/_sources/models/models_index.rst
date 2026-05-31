Model Documentation Index
=========================

This section provides comprehensive documentation for all CoreRec recommendation models.

Model Tiers
-----------

CoreRec organizes models into two tiers:

**Production Models (14)** — fully tested, CI-enforced, implement ``BaseRecommender``:

- DCN, DeepFM, GNNRec, MIND, NASRec, SASRec, TwoTower, BERT4Rec
- SAR, NCF, FAST, FASTRecommender, LightGCN
- TFIDFRecommender

**Sandbox Models (~50)** — experimental, in ``corerec/sandbox/``, not production-tested.

See :doc:`index` for the full production vs sandbox breakdown.

Model Categories
----------------

.. toctree::
   :maxdepth: 2
   
   index
   deep_learning
   matrix_factorization
   graph_based
   sequential
   bayesian
   content_based

Production Quick Reference
--------------------------

Deep Learning
~~~~~~~~~~~~~

* DCN — Deep & Cross Network
* DeepFM — Factorization Machines + DNN
* GNNRec — Graph Neural Networks
* MIND — Multi-Interest Network
* NASRec — Neural Architecture Search
* SASRec — Self-Attentive Sequential
* TwoTower — Dual-encoder retrieval
* BERT4Rec — Bidirectional sequential transformer

Collaborative Filtering
~~~~~~~~~~~~~~~~~~~~~~~

* SAR — Smart Adaptive Recommendations
* NCF — Neural Collaborative Filtering
* FAST / FASTRecommender — Fast similarity CF
* LightGCN — Graph convolution CF

Content-Based
~~~~~~~~~~~~~

* TFIDFRecommender — TF-IDF content similarity

Sandbox Models
--------------

Experimental algorithms for research — see sandbox tutorials and ``corerec/sandbox/``.
Not covered by production CI tests.
