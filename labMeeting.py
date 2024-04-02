#%%
import numpy as np
import time

freshman = np.array(['이현휘', '박호연', '박하진'])
fresh_weight = np.random.rand(3)
fresh_indice = np.argsort(fresh_weight)
fresh_order = freshman[fresh_indice]

ref_order = np.array(['최동하', '박건우', '박상하', '현해웅', '문형주', \
                      '최진영', '김용휘', '김윤태', '민석기', '김혜원', \
                      '양시윤', '전동수', '유한주', '황상준'])
noise = np.arange(14) + 1
np.random.shuffle(noise)
weight = np.arange(14) + 1 + noise * 1.5
sort_indice = np.argsort(weight)
order = ref_order[sort_indice]

order = np.concatenate([fresh_order, order])

old = np.concatenate([np.zeros(3, dtype=np.int8), np.arange(14, dtype=np.int8)[sort_indice]+1]) 
new = np.concatenate([np.arange(3, dtype=np.int32)+1, noise[sort_indice]+1]) 
weights = np.concatenate([(np.arange(3, dtype=np.int32)+1)*1.5, weight[sort_indice]]) 
print("No.  Name    기존 | 추첨      최종")
for i, man in enumerate(order):
    # time.sleep(2)
    print(f"{i+1:2} : {man}  ( {old[i]:2} + {new[i]:2} *1.5= {weights[i]:4.1f} )")

# %%
