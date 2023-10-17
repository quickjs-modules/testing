MODULE_NAME=testing

test:
	echo "No tests yet"

$(MODULE_NAME).tar: LICENSE README.md $(wildcard *.js)
	tar cf $@ $?

release: clean test | $(MODULE_NAME).tar
	qm-release -name $(MODULE_NAME) -tag $(TAG) -archive $|

clean:
	rm -f *.tar

.PHONY: clean release test
