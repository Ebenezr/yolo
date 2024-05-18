resource "null_resource" "ansible_provisioner" {
  provisioner "local-exec" {
    command = "ansible-playbook ../../playbook.yml"
  }
}
