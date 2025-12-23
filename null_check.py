import pathlib
for path in pathlib.Path('.').glob('**/*.md'):
    data = path.read_bytes()
    if b'\x00' in data:
        print('null byte in', path)
