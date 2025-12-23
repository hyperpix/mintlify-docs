import pathlib
import itertools
paths = itertools.chain(pathlib.Path('.').glob('*.json'), pathlib.Path('.').glob('**/*.json'), pathlib.Path('.').glob('*.md'), pathlib.Path('.').glob('**/*.md'), pathlib.Path('.').glob('*.ts'), pathlib.Path('.').glob('**/*.ts'), pathlib.Path('.').glob('*.tsx'), pathlib.Path('.').glob('**/*.tsx'))
seen = set()
for path in paths:
    if path in seen:
        continue
    seen.add(path)
    if not path.is_file():
        continue
    data = path.read_bytes()
    if b'\x00' in data:
        print('null byte in', path)
