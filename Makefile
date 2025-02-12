MDBOOK_V = 0.4.44
MB_MERMAID_V = 0.14.1

MDBOOK_URL = \
	https://github.com/rust-lang/mdBook/releases/download/v$(MDBOOK_V)/mdbook-v$(MDBOOK_V)-x86_64-unknown-linux-gnu.tar.gz

MDBOOK_PACKAGE = \
	mdbook-v$(MDBOOK_V)-x86_64-unknown-linux-gnu.tar.gz

MB_MERMAID_URL = \
	https://github.com/badboy/mdbook-mermaid/releases/download/v$(MB_MERMAID_V)/mdbook-mermaid-v$(MB_MERMAID_V)-x86_64-unknown-linux-gnu.tar.gz

MB_MERMAID_PACKAGE = \
	mdbook-mermaid-v$(MB_MERMAID_V)-x86_64-unknown-linux-gnu.tar.gz

install-from-source: install-mdbook-from-source install-mermaid-from-source

install-mdbook-from-source:
	cargo install -f mdbook

install-mermaid-from-source:
	cargo install -f mdbook-mermaid
	mdbook-mermaid install .

install-from-remote: install-mdbook-from-remote install-mermaid-from-remote

install-mdbook-from-remote:
	curl -L -O "$(MDBOOK_URL)"
	tar -xvf "$(MDBOOK_PACKAGE)"

install-mermaid-from-remote:
	curl -L -O "$(MB_MERMAID_URL)"
	tar -xvf "$(MB_MERMAID_PACKAGE)"
	./mdbook-mermaid install .
