export function getStudentIn5Category(score) {
    let res
    if (score >= 10) res = 5
    else if (score >= 7) res = 4
    else if (score >= 5) res = 3
    else if (score >= 3) res = 2
    else res = 1
    return res
}
