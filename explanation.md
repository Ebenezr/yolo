# Playbook Execution Order Explanation

## Task 1: Initialize Terraform
```yaml
- name: Initialize Terraform
  shell: terraform init
  args:
    chdir: "{{ terraform_dir }}"
```

The shell module runs terraform init to initialize a Terraform working directory, setting up plugins and backend storage.

## Task 2: Apply Terraform
```yaml
- name: Apply Terraform
  shell: terraform apply -auto-approve
  args:
    chdir: "{{ terraform_dir }}"
```
terraform apply -auto-approve applies configuration changes, skipping interactive approval, using the shell module.

## Importing another playbook
```yaml
- import_playbook: playbook.yml
```
import_playbook executes playbook.yml after the current playbook have provision vagrant vm on which the rest of the tasks will be run on.
this stage will the triger the rest of project building including cloning git repo, building images and running the docker images.
### Tasks on playbook.yml
- *The build_client role* builds the client Docker image, using the Dockerfile in the specified path.
- *The build_backend role* builds the backend Docker image, using the Dockerfile in the specified path.
- *The restart docker handler* restarts Docker containers, ensuring they're in the started state.
- *The post_tasks section* starts Docker containers from the specified images and ports, and notifies the restart docker handler.

