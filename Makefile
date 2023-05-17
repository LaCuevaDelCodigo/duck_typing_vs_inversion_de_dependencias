SERVICE=duck_typing_vs_di

.PHONY: build
build:
	@docker compose run --rm $(SERVICE) npm run build

install:
	@docker compose run --rm $(SERVICE) npm install $(deps)

run/duck_typing:
	@docker compose run --rm $(SERVICE) npm run dev-example-1

run/dependency_inversion:
	@docker compose run --rm $(SERVICE) npm run dev-example-2

run/real_example:
	@docker compose run --rm $(SERVICE) npm run dev-example-3

linter/check:
	@docker compose run --rm $(SERVICE) npm run linter:check
	
linter/fix:
	@docker compose run --rm $(SERVICE) npm run linter:fix
