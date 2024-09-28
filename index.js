console.log("ONE")

console.log("TWO")

/*
git init
git add.
git commit -m "intial commit" 
git diff
git log
git log --oneline
git show 9e55530 

RESET BACK IN LATEST COMMIT ===>

93253ac (HEAD -> master) im gonna delete this
16ff1d9 some Comments Added
9e55530 Another commit
aa56fa1 intial commit

=> git reset --hard 16ff1d9   [Id in which i want set head, then all commit after this id will gone]

16ff1d9 (HEAD -> master) some Comments Added
9e55530 Another commit
aa56fa1 intial commit

REVERT BACK IN LATEST COMMIT ===>
i wanted to remove this, But rest of commit will remain unchanged-->  9e55530 Another commit

=> git revert 9e55530

BRANCHING
git branch
git branch "myNewBranch"  ====>     * master
                                    myNewBranch
git checkout myNewBranch  ====>     master
                                    * myNewBranch
*/
const myNewBranch = ()=>{
    console.log("new Feature Added")
}
