---
title: When will the sum of samples from a trigonometric function be zero
published: 2025-06-12
description: "math for the fools"
tags: ["Notes"]
category: "EE"
draft: false
---

There's an interesting feature of trigonometric functions that I came up with while dealing with the WFM of resolvers: When a trigonometric function $\cos (Ax + \varphi)$ is sampled $B$ times within $x \in [0, 2\pi)$ with equal time interval, the **necessary and sufficient** condition for the sum of $N$ consecutive samples to be zero is that $NA \mid B$ and $A \nmid B$ ($A,B,N \in \mathbb{Z}$).

It is somehow intrinsic once mentioned, but it really took me a while to prove. I guess that's a hint for me that I should never get involved in math.

---

Prove:

For any $\varphi \in [0, 2\pi)$:

<center>

$$\sum\limits_{k = 0}^{N - 1} {\cos \left( {\frac{{2\pi kA}}{B} + \phi } \right)}  = {\mathop{\rm Re}\nolimits} \left( {{e^{j\phi }}\sum\limits_{k = 0}^{N - 1} {{e^{j\frac{{2\pi kA}}{B}}}} } \right) = {\mathop{\rm Re}\nolimits} \left( {{e^{j\phi }}\left( {\frac{{1 - {e^{2\pi j\frac{{NA}}{B}}}}}{{1 - {e^{2\pi j\frac{A}{B}}}}}} \right)} \right)$$

</center>

If $NA \mid B$ and $A \nmid B$, then $1- e^{2\pi j \frac{NA}{B}} = 0$ and$1- e^{2\pi j \frac{A}{B}} \neq 0$, thus ${\mathop{\rm Re}\nolimits} \left( {{e^{j\phi }}\left( {\frac{{1 - {e^{2\pi j\frac{{NA}}{B}}}}}{{1 - {e^{2\pi j\frac{A}{B}}}}}} \right)} \right) \equiv 0$, and the sum of $N$ consecutive samples is always zero.

Otherwise, if $NA \nmid B$ as well as $A \nmid B$, for any $\phi$ that satisfies:

<center>

$${\mathop{\rm Re}\nolimits} \left( {{e^{j\phi }}\left( {\frac{{1 - {e^{2\pi j\frac{{NA}}{B}}}}}{{1 - {e^{2\pi j\frac{A}{B}}}}}} \right)} \right) = 0 \Leftrightarrow {e^{j\phi }}\left( {\frac{{1 - {e^{2\pi j\frac{{NA}}{B}}}}}{{1 - {e^{2\pi j\frac{A}{B}}}}}} \right) =  \pm j$$

</center>

there is always a $\Delta \varphi \neq n\pi (n \in \mathbb{Z})$ that makes

<center>

$${{\rm{Re}}\left( {{e^{j\left( {\phi  + \Delta \phi } \right)}}\left( {\frac{{1 - {e^{2\pi j\frac{{NA}}{B}}}}}{{1 - {e^{2\pi j\frac{A}{B}}}}}} \right)} \right) = {\rm{Re}}\left( { \pm j{e^{j\Delta \phi }}} \right)}$$

$${ = {\rm{Re}}\left( { \pm j\left( {\cos \Delta \phi  + j\sin \Delta \phi } \right)} \right) =  \pm \sin \Delta \phi  \ne 0}$$

</center>

which means the sum of $N$ consecutive samples is determined by $\phi$.

If $A \mid B$, assume that $A = nB (n \in \mathbb{Z})$, 

<center>

$$\sum\limits_{k = 0}^{N - 1} {\cos \left( {\frac{{2\pi kA}}{B} + \phi } \right)}  = \sum\limits_{k = 0}^{N - 1} {\cos \left( {2\pi nk + \phi } \right)}  = N\cos \phi$$

</center>

which means the sum of samples equals zero only with $\varphi = \frac{\pi}{2}$ or $\varphi = \frac{3\pi}{2}$.

Q.E.D.

---

Let's say such conclusion is somehow useful. E.g., if the induced voltage of a resolver has a constant-amplitude component of:

<center>

$${v_s} = \sum\limits_{i=0}^{\omega_t-1} {{v_{si}}}  = \frac{{{\rm{d}}i}}{{{\rm{d}}t}}{p_0}\sum\limits_{i=0}^{\omega_t-1} {{n_{si}}{n_{ei}}} $$

</center>

where $n_{si} = N_s \cos (\omega_s \theta_i)$, $n_{ei} = N_e \cos (\omega_e \theta_i)$, and $\theta_i = \frac{2\pi i}{\omega_t}$.

What are the requirements to have $v_s \equiv 0$? In this example, $A = \omega_e \pm \omega_s$, $B = \omega_t$ and $N = \omega_t$. So the necessary and sufficient condition will be $\omega_e \pm \omega_s \nmid \omega_t$.