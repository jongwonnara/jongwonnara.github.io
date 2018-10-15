form Crypio.Hash import keccak 

k = keccak.new(digest_bits=256)
k.update('세종대왕')
print(k.hexdigest())