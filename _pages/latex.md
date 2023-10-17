---
layout: single
title: LaTeX
permalink: /latex/
---

## Matrices and vectors
[https://www.overleaf.com/learn/latex/Matrices](https://www.overleaf.com/learn/latex/Matrices)

**Generate latex matrix**

[https://jasonwarta.github.io/latex-matrix/](https://jasonwarta.github.io/latex-matrix/)

**Column vector**

$$
\begin{bmatrix}
           x_{1} \\
           x_{2} \\
           \vdots \\
           x_{m}
         \end{bmatrix}
$$
```
\begin{bmatrix}
           x_{1} \\
           x_{2} \\
           \vdots \\
           x_{m}
\end{bmatrix}
```
---
**Row vector**

$$
\begin{bmatrix} x_{1} & x_{2}  & \dots & x_{D} \end{bmatrix}^T
$$
```
\begin{bmatrix} x_{1} & x_{2}  & \dots & x_{D} \end{bmatrix}^T
```
---
**Matrix**

$$
\begin{bmatrix}
1 & 2 & 3\\
4 & 5 & 6\\
a & b & c
\end{bmatrix}
$$
```
\begin{bmatrix}
1 & 2 & 3\\
4 & 5 & 6\\
a & b & c
\end{bmatrix}
```
---
**Big matrix**

$$
A_{n\times d} = \begin{bmatrix}
    x_{11} & x_{12} & x_{13} & \dots  & x_{1d} \\
    x_{21} & x_{22} & x_{23} & \dots  & x_{2d} \\
    \vdots & \vdots & \vdots & \ddots & \vdots \\
    x_{n1} & x_{n2} & x_{n3} & \dots  & x_{nd}
\end{bmatrix}
$$
```
\begin{bmatrix}
    x_{11} & x_{12} & x_{13} & \dots  & x_{1d} \\
    x_{21} & x_{22} & x_{23} & \dots  & x_{2d} \\
    \vdots & \vdots & \vdots & \ddots & \vdots \\
    x_{n1} & x_{n2} & x_{n3} & \dots  & x_{nd}
\end{bmatrix}
```
---
**Cases**

$$
 X = \begin{cases}
      0, & \text{if}\ a=1 \\
      1, & \text{otherwise}
    \end{cases}
$$
```
\begin{cases}
    0, & \text{if}\ a=1 \\
    1, & \text{otherwise}
\end{cases}
```

## Probability
**Mean**

$$
\mathbb{E}[x] = \frac{1}{N}\sum_{n=1}^N x_n
$$
```
\mathbb{E}[x] = \frac{1}{N}\sum_{n=1}^N x_n
```
---
**Variance and covariance**

$$\mathrm{Var}[x]$$
$$\mathbb{V}[x]$$
$$\mathrm{Cov}[x,x]$$

```
\mathrm{Var}[x]
\mathbb{V}[x]
\mathrm{Cov}[x,x]
```
---
**Overset and underset**

$$\overset{\mathrm{i.i.d.}}{=}$$
```
\overset{\mathrm{i.i.d.}}{=}
```
$$\underset{\mathrm{x \rightarrow 0}}{=}$$
```
\underset{\mathrm{x \rightarrow 0}}{=}
```

## Custom operators
**Argmax**

$$\textrm{arg max}$$
```
\DeclareMathOperator*{\argmax}{arg\,max}  % defines \argmax operator for arg max
```

## Math Packages
```
\usepackage{amsmath}  % Includes math operators and equations
\usepackage{amssymb} % Provides an extended symbol collection (such as conformal C)
\usepackage{amsthm}  % Provides theorem-like structures
\usepackage{dsfont} % Provides another extension of symbol collection
\usepackage{accents}  % Extends the accent collection on symbols
```

## Layout packages
```
\usepackage{graphicx} % Required for inserting images
\usepackage{url}  % Package for urls
\usepackage{float}  % The fix for floating figures: \begin{figure}[H]
\usepackage[toc, page]{appendix}  % for the appendix
```