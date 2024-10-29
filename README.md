Collaboration practice Plan: Git Workflow Basics

This repository is a collaborative practice ground to learn the essentials of working on the same project with a team. We’ll focus on a sequence of Git commands to help team members contribute seamlessly and manage their changes without conflicts.

Step-by-Step Workflow
1. Clone the repository
    - Start by copying the repository to your local machine.
      >git clone https://github.com/bobo0128/testProject.git

2. Create Your Own Branch
    - Check out a new branch for your work. Use a branch name that's unique to you.
      >git checkout -b <your_branch_name>

3. Add or Modify Files
    - make your changes or add any new files that you'd like to contribute.

4. Stage Your Changes
    - Prepare your change to be committed by adding them to the staging area.
      >git add .
    You can use VS Code's Source Control pane to add files instread of using the command line. 

5. Commit Your Changes
    - Record your changes in the branch with a descriptive message.
      > git commit -m 'your commit message, describe your changes here'

6. Push Your Branch to the Remote Repository
    - Send your branch and its commits to the remote repository so others can view and review them.
      >git push origin <your_branch_name>
    VS Code's Source Control pane can handle this as well.

7. Rebase with the Main Branch
    - To make sure your branch is up-to-date with the latest changes in the main branch, rebase with the main branch.
      >git fetch origin
      >git rebase origin/main
    This integrates the latest changes from main into your branch. If there are any conflicts, resolve them (see the next step).

8. Resolve Any Conflicts
    - If conflicts arise during the rebase, resolve them in your code editor.
    - After resolving conflicts, mark the changes as resolved and continue the rebase:
      >git add <resolved_file>
      >git rebase --continue

9. Switch Branches (if needed)
    - If you need to change branches to work on another feature or review another teammate’s code, you can switch branches.
      >git switch <branch_name>
      
10. Create a Pull/Merge Request
    - Once your branch is ready, go to GitHub and create a pull request (PR) to merge your changes into the main branch.
    - Add a clear title and description to help reviewers understand your changes.

11. Review the Pull Request
    - Reviewers will go through the PR, suggest improvements, and approve it if everything looks good.

12. Merge Your Changes to the Main Branch
    - After approval, merge your branch into the main branch on GitHub.
    - Optional: Delete the feature branch after merging to keep the branch structure clean.
